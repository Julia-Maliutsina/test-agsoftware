import { Router } from 'express';

import { getAllUsers, updateUser } from '../controllers/usersController.js';

const router = Router();

router.get('/users', getAllUsers);
router.put('/users/:id', updateUser);

export { router };
