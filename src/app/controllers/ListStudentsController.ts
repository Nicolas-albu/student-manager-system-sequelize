import ListStudentsUserCase from "../../domain/useCases/ListStudentsUseCase";
import Student from "../../domain/entities/Student";
import { Request, Response } from 'express'

export default class ListStudentController {
    constructor(
        private listStudentsUseCase: ListStudentsUserCase,
    ) { }

    async handle(req: Request, res: Response): Promise<Student[] | void> {
        let students: Student[]

        try {
            students = await this.listStudentsUseCase.execute()

            students = students.map((student) => ({
                registration: student.registration,
                name: student.name,
                dateOfBirth: student.dateOfBirth.toLocaleString().slice(0, 10),
                email: student.email,
                status: student.status,
            }));

            return students
        } catch (err) {
            const errorMessage = err.message || 'Ocorreu um erro na listagem dos estudantes'

            return res.status(400).redirect(`error/${errorMessage}`)
        }
    }
}
