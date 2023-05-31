import StudentUseCases from "../useCases/StudentUseCases";
import { Router } from "express";

const useCasesRouter = Router()
const studentUserCases = new StudentUseCases();

useCasesRouter.post('/create', (req, res) => {
    return studentUserCases.createStudentController.handle(req, res);
})

useCasesRouter.put('/update/:registration', (req, res) => {
    return studentUserCases.updateStudentController.handle(req, res);
})

useCasesRouter.delete('/delete/:registration', (req, res) => {
    return studentUserCases.deleteStudentController.handle(req, res);
})

export default useCasesRouter