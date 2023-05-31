import ListStudentsUserCase from "../../domain/useCases/ListStudentsUseCase";
import Student from "../../domain/entities/Student";
import { Request, Response } from 'express'

export default class CreateStudentController {
    constructor(
        private listStudentsUseCase: ListStudentsUserCase,
    ) { }

    async handle(req: Request, res: Response): Promise<Student[] | void> {
        let students: Student[]

        try {
            students = await this.listStudentsUseCase.execute()

            const dateOfStudentsFormatted = students.map((student) => ({
                ...student,
                dateOfBirth: student.dateOfBirth.toLocaleString().slice(0, 10),
            }));            
            
            return dateOfStudentsFormatted
        } catch (err) {
            const errorMessage = err.message || 'Ocorreu um erro na listagem dos estudantes'

            return res.status(400).redirect(`error/${errorMessage}`)
        }
    }
}
