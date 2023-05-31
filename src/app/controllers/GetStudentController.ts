import GetStudentsUserCase from "../../domain/useCases/GetStudentUseCase";
import Student from "../../domain/entities/Student";
import { Request, Response } from 'express'

export default class GetStudentController {
    constructor(
        private getStudentsUseCase: GetStudentsUserCase,
    ) { }

    async handle(req: Request, res: Response): Promise<Student | void> {
        const { registration } = req.params;
        let students: Student

        try {
            students = await this.getStudentsUseCase.execute(Number(registration))

            return students
        } catch (err) {
            const errorMessage = err.message || `Ocorreu um erro na listagem do estudante de matrícula ${registration}`

            return res.status(400).redirect(`error/${errorMessage}`)
        }
    }
}
