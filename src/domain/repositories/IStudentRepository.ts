import Student from "../entities/Student";

export default interface IStudentRepository {
    findByRegistration(registration: number): Promise<Student>;
    findByName(name: string): Promise<Student[]>;
    findByEmail(email: string): Promise<Student>;
    create(student: Student): Promise<void>;
    delete(registration: number): Promise<void>;
    update(student: Student): Promise<void>;
    list(): Promise<Student[]>;
}
