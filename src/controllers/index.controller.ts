import { Request, Response } from "express"
import { QueryResult } from "pg";
import {pool} from '../databse'

export const getUsers = async (req: Request, res: Response) => {
    const response: QueryResult = await pool.query('SELECT * FROM users');
    console.table(response.rows);
    res.send('users')
}