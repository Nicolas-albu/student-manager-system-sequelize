import UpdateStudentUseCase from "../../domain/useCases/UpdateStudentUseCase";
import { Request, Response } from "express";

export default class UpdateStudentController {
    constructor(
        private updateStudentUseCase: UpdateStudentUseCase,
    ) { }

    async handle(req: Request, res: Response): Promise<void> {
        const { name, dateOfBirth, status, email } = req.body;
        const { registration } = req.params;

        try {
            await this.updateStudentUseCase.execute({
                registration: Number(registration),
                name,
                dateOfBirth: new Date(dateOfBirth),
                email,
                status,
            });

            return res.status(200).redirect('/')
        } catch (err) {
            const errorMessage = err.message || `Ocorreu um erro na atualização do estudante ${name}.`

            return res.status(400).redirect(`error/${errorMessage}`)
        }
    }
}