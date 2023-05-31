import IStudentRepository from "../../domain/repositories/IStudentRepository";
import StudentTable from "../sequelize/StudentTable";
import Student from "../../domain/entities/Student";


export default class SequelizeStudentRepository implements IStudentRepository {
    async findByRegistration(registration: number): Promise<Student | null> {
      return await StudentTable.findByPk(registration);
    }
  
    async findByEmail(email: string): Promise<Student | null> {
      return await StudentTable.findOne({ where: { email } });
    }
  
    async create(student: Student): Promise<void> {
        const { registration, ...studentData } = student;
        
      await StudentTable.create(studentData);
    }
  
    async delete(registration: number): Promise<void> {
      await StudentTable.destroy({ where: { registration } });
    }
  
    async update(student: Student): Promise<void> {
      await StudentTable.update(student, { where: { registration: student.registration } });
    }
  
    async list(): Promise<Student[]> {
      const students = await StudentTable.findAll();
      console.log(students)
      return students
    }
  }