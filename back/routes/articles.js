import { Router } from 'express';

import ArticleModel from '../models/Article.js';
import UserModel from '../models/User.js';
import { getAllArticles } from '../controllers/articlesController.js';

const router = Router();

router.get('/articles', getAllArticles);

export { router };
