import { Router } from 'express';

import { getAllArticles, createArticle } from '../controllers/articlesController.js';

const router = Router();

router.get('/articles', getAllArticles);
router.post('/articles', createArticle);

export { router };
