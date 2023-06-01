import Student from "../entities/Student";
import IStudentRepository from "../repositories/IStudentRepository";

export default class GetStudentsByNameUseCase {
    constructor(
        private studentRepository: IStudentRepository,
    ) { }

    async execute(name: string): Promise<Student[]> {
        const student = await this.studentRepository.findByName(name);

        if (!student) {
            throw new Error("Estudante não encontrado.");
        }

        return student;
    }
}