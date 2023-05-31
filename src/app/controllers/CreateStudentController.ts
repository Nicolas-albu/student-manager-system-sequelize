import CreateStudentUserCase from '../../domain/useCases/CreateStudentUseCase';
import Student from '../../domain/entities/Student';
import { Request, Response } from 'express'

export default class CreateStudentController {
    constructor(
        private createStudentUseCase: CreateStudentUserCase,
    ) { }

    async handle(req: Request, res: Response): Promise<void> {
        const { registration, name, dateOfBirth, status, email }: Student = req.body;

        try {
            await this.createStudentUseCase.execute({
                registration,
                name,
                dateOfBirth: new Date(dateOfBirth),
                email,
                status,
            });

            return res.status(201).redirect('/')
        } catch (err) {
            const errorMessage = err.message || `Ocorreu um erro na criação do estudante ${name}.`

            return res.status(400).redirect(`/error/${errorMessage}`)
        }
    }
}
