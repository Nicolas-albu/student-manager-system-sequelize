import { StudentAttributes } from '../../../domain/entities/Student';
import { Model, DataTypes } from 'sequelize';
import sequelize from '../sequelize';


interface StudentModel extends StudentAttributes, Model<StudentAttributes> { }

const StudentTable = sequelize.define<StudentModel>('TBL_STUDENT', {
    registration: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,

    },
    dateOfBirth: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'ATIVO',
    }
})

export default StudentTable