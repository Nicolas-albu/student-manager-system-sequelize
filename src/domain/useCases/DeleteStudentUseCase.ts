import IStudentRepository from "../repositories/IStudentRepository";

export default class DeleteStudentUserCase {
    constructor(
        private studentRepository: IStudentRepository
    ) { }

    async execute(registration: number): Promise<void> {
        const studentAlreadyExists = await this.studentRepository.findByRegistration(registration);

        if (!studentAlreadyExists) {
            throw new Error('Estudante não encontrado.');
        }

        await this.studentRepository.delete(registration);
    }
}