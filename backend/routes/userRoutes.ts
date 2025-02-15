import express, { Request, Response } from 'express';
import { getUsers } from '../services/userServices';

const router = express.Router();

router.get('/', async (req: Request, res: Response) => {
    try {
        const users = await getUsers();
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
});

export default router;
