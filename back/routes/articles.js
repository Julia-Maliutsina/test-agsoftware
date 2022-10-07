import { Router } from 'express';

import { getAllArticles, createArticle, updateArticle } from '../controllers/articlesController.js';
import authCheck from '../middlewares/authMiddleware.js';
import roleCheck from '../middlewares/roleMiddleware.js';
import { ROLES } from '../constants/roles.js';

const router = Router();

router.get('/articles', authCheck, getAllArticles);
router.post('/articles', authCheck, roleCheck([ROLES.admin, ROLES.editor]), createArticle);
router.put('/articles/:id', authCheck, roleCheck([ROLES.admin, ROLES.editor]), updateArticle);

export { router };
