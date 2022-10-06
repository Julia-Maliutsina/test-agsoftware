import { Router } from 'express';

import UserModel from '../models/User.js';
import { getAllUsers } from '../controllers/usersController.js';

const router = Router();

router.get('/users', getAllUsers);

export { router };
