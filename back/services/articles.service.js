import ArticleModel from '../models/Article.js';
import UserModel from '../models/User.js';

const getAllArticles = async () => {
  return ArticleModel.findAll({
    include: [
      {
        model: UserModel,
        as: 'author',
      },
    ],
    order: [['createdAt', 'DESC']],
  });
};

const createArticle = async ({ title, text, authorId }) => {
  const newArticle = {
    title,
    text,
    authorId,
  };

  return ArticleModel.create(newArticle);
};

const updateArticle = async ({ title, text, id }) => {
  const article = await ArticleModel.findByPk(id);
  article.set({
    title: title || article.title,
    text: text || article.text,
  });

  await article.save();

  return article;
};

const articleService = { getAllArticles, createArticle, updateArticle };

export default articleService;
