import IStudentRepository from "../repositories/IStudentRepository";
import Student from "../entities/Student";

export default class ListStudentsUserCase {
    constructor(
        private studentRepository: IStudentRepository,
    ) { }

    async execute(): Promise<Student[]> {
        let students = await this.studentRepository.list();

        if (!students) {
            throw new Error("Estudante não encontrado.");
        }

        return students;
    }
}