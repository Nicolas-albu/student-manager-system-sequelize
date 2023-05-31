import Student from "../entities/Student";
import IStudentRepository from "../repositories/IStudentRepository";

export default class GetStudentsUserCase {
    constructor(
        private studentRepository: IStudentRepository,
    ) { }

    async execute(registration: number): Promise<Student> {
        const student = await this.studentRepository.findByRegistration(registration);

        if (!student) {
            throw new Error("Estudante não encontrado.");
        }

        return student;
    }
}