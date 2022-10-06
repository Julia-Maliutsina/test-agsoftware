import { Router } from 'express';

import { getAllArticles, createArticle, updateArticle } from '../controllers/articlesController.js';

const router = Router();

router.get('/articles', getAllArticles);
router.post('/articles', createArticle);
router.put('/articles/:id', updateArticle);

export { router };
