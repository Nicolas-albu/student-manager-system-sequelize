import IStudentRepository from "../../domain/repositories/IStudentRepository";
import Student from "../../domain/entities/Student";

export default class SequelizeStudentRepository implements IStudentRepository {
    // protected prisma: PrismaClient;

    constructor() {
        // this.prisma = new PrismaClient();
    }

    async findByRegistration(registration: number): Promise<Student> {
        return await this.prisma.student.findUnique({
            where: { registration }
        });
    }

    async findByEmail(email: string): Promise<Student> {
        return await this.prisma.student.findUnique({
            where: { email },
        })
    }

    async create(student: Student): Promise<void> {
        await this.prisma.student.create({
            data: student,
        })
    }

    async delete(registration: number): Promise<void> {
        await this.prisma.student.delete({
            where: { registration },
        })
    }

    async update(student: Student): Promise<void> {
        await this.prisma.student.update({
            where: { registration: student.registration },
            data: student,
        })
    }

    async list(): Promise<Student[]> {
        return await this.prisma.student.findMany();
    }
}