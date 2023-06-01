import GetStudentsByNameUseCase from "../../domain/useCases/GetStudentsByNameUseCase";
import Student from "../../domain/entities/Student";
import { Request, Response } from 'express'

export default class GetStudentsByNameController {
    constructor(
        private getStudentsByNameUseCase: GetStudentsByNameUseCase,
    ) { }

    async handle(req: Request, res: Response): Promise<Response | void> {
        const { name } = req.params;
        let students: Student[]

        try {
            students = await this.getStudentsByNameUseCase.execute(name)

            console.log(students)

            return res.status(200).json(students)
        } catch (err) {
            const errorMessage = err.message || `Ocorreu um erro na listagem do estudante com nome ${name}`

            return res.status(400).redirect(`error/${errorMessage}`)
        }
    }
}
