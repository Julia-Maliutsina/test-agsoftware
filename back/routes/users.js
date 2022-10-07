import { Router } from 'express';

import { getAllUsers, updateUser } from '../controllers/usersController.js';
import authCheck from '../middlewares/authMiddleware.js';
import roleCheck from '../middlewares/roleMiddleware.js';
import { ROLES } from '../constants/roles.js';

const router = Router();

router.get('/users', authCheck, roleCheck([ROLES.admin]), getAllUsers);
router.put('/users/:id', authCheck, roleCheck([ROLES.admin]), updateUser);

export { router };
