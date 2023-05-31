import { Registration } from "../../domain/entities/Student";

export default interface ICreateStudentDTO {
    registration: Registration;
    name: string;
    dateOfBirth: Date;
    email: string;
    status: string;
}
