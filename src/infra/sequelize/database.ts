import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';
import mysql from 'mysql2';

dotenv.config();

export const connectionToMySQL = mysql.createPool({
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

export const sequelizeConnection = new Sequelize(
    process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    dialect: process.env.DB_DIALECT,
    host: process.env.DB_HOST
});