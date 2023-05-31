import StudentUseCases from "../useCases/StudentUseCases";
import { Router } from "express";

const viewRouter = Router()
const studentUserCases = new StudentUseCases();


viewRouter.get('/', async (req, res) => {
    const students = await studentUserCases.listStudentController.handle(req, res)

    return res.status(200).render('pages/listStudentView', { students })
})

viewRouter.get('/createStudent', async (req, res) => {
    return res.status(200).render('pages/createStudentView')
})

viewRouter.get('/deleteView', async (req, res) => {
    return res.status(200).render('pages/deleteView')
})

viewRouter.get('/error/:errorMessage', async (req, res) => {
    const { errorMessage } = req.params

    return res.status(400).render('pages/errorView', { errorMessage })
})

viewRouter.get('/updateStudent/:registration', async (req, res) => {
    const student = await studentUserCases.getStudentController.handle(req, res);

    return res.status(200).render('pages/updateStudentView', { student })
})


export default viewRouter