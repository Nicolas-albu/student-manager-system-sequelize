import IStudentRepository from "../../domain/repositories/IStudentRepository";
import StudentTable from "../sequelize/models/StudentTable";
import Student from "../../domain/entities/Student";
import sequelize from "../sequelize/sequelize";
import { Op } from "sequelize";


export default class SequelizeStudentRepository implements IStudentRepository {
  async findByRegistration(registration: number): Promise<Student | null> {
    await sequelize.sync();

    return await StudentTable.findByPk(registration);
  }

  async findByName(name: string): Promise<Student[]> {
    await sequelize.sync();

    return await StudentTable.findAll({
      where: {
        name: {
          [Op.like]: `${name}%`
        }
      }
    })
  }

  async findByEmail(email: string): Promise<Student | null> {
    await sequelize.sync();

    return await StudentTable.findOne({
      where: {
        email
      }
    });
  }

  async create(student: Student): Promise<void> {
    await sequelize.sync();

    const { registration, ...studentData } = student;

    await StudentTable.create(studentData);
  }

  async delete(registration: number): Promise<void> {
    await sequelize.sync();

    await StudentTable.destroy({
      where: {
        registration
      }
    });
  }

  async update(student: Student): Promise<void> {
    await sequelize.sync();

    await StudentTable.update(student, {
      where: {
        registration: student.registration
      }
    });
  }

  async list(): Promise<Student[]> {
    await sequelize.sync();

    return await StudentTable.findAll();
  }
}