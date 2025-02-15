import sql from 'mssql';
import { User } from '../models/user';

export const getUsers = async (): Promise<User[]> => {
    const result = await sql.query`SELECT * FROM Users`;
    return result.recordset;
};
