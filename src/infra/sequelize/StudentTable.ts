import { sequelizeConnection } from './database';
import { Model, DataTypes } from 'sequelize';

enum Status {
    ATIVO = 'ATIVO',
    INATIVO = 'INATIVO',
}

export default class StudentTable extends Model {
    public registration: number;
    public name: string;
    public dateOfBirth: Date;
    public email: string;
    public status: Status;
}

StudentTable.init({
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
        type: DataTypes.ENUM(...Object.values(Status)),
        allowNull: false,
    },
},
    {
        tableName: 'TBL_STUDENT',
        sequelize: sequelizeConnection,
    }
);