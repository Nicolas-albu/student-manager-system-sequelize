import DeleteStudentUserCase from "../../domain/useCases/DeleteStudentUseCase";
import { Request, Response } from "express";

export default class DeleteStudentController {
    constructor(
        private deleteStudentUserCase: DeleteStudentUserCase
    ) { }

    async handle(req: Request, res: Response): Promise<void> {
        const { registration } = req.params;

        try {
            this.deleteStudentUserCase.execute(Number(registration));

            return res.status(200).redirect('/deleteView')
        } catch (err) {
            const errorMessage = err.message || `Ocorreu um erro na remoção do estudante ${registration}.`

            return res.status(400).redirect(`error/${errorMessage}`)
        }
    }
}
