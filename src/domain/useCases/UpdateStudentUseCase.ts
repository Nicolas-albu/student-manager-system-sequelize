import IStudentRepository from "../repositories/IStudentRepository";
import Student from "../entities/Student";

export default class UpdateStudentUseCase {
    constructor(
        private studentRepository: IStudentRepository,
    ) { }

    async execute(student: Student): Promise<void> {
        const studentAlreadyExists = await this.studentRepository.findByRegistration(
            student.registration
        );

        if (!studentAlreadyExists) {
            throw new Error('Estudante não encontrado.');
        }

        await this.studentRepository.update(student);
    }
}