import IStudentRepository from "../repositories/IStudentRepository";
import ICreateStudentDTO from "../../app/dtos/ICreateStudentDTO";
import Student from "../entities/Student";

export default class CreateStudentUserCase {
    constructor(
        private studentRepository: IStudentRepository
    ) { }

    async execute(data: ICreateStudentDTO): Promise<void> {
        const studentAlreadyExists = await this.studentRepository.findByEmail(
            data.email
        );

        if (studentAlreadyExists) {
            throw new Error("Já existe um estudante com esse email.");
        }

        const student = new Student(data);

        await this.studentRepository.create(student);
    }
}