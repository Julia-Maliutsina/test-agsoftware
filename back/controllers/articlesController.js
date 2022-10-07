import ArticleModel from '../models/Article.js';
import UserModel from '../models/User.js';
import articleService from '../services/articles.service.js';

const getAllArticles = async (request, response) => {
  const articles = await articleService.getAllArticles();

  response.status(200).send(articles);
};

const createArticle = async (request, response) => {
  const { title, text, authorId } = request.body;
  const article = await articleService.createArticle({ title, text, authorId });

  response.status(200).send(article);
};

const updateArticle = async (request, response) => {
  const { title, text } = request.body;
  const id = request.params.id;

  const article = await articleService.updateArticle({ title, text, id });
  response.status(200).send(article);
};

export { getAllArticles, createArticle, updateArticle };
