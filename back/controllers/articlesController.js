import ArticleModel from '../models/Article.js';
import UserModel from '../models/User.js';

const getAllArticles = async (request, response) => {
  const articles = await ArticleModel.findAll({
    include: [
      {
        model: UserModel,
        as: 'author',
      },
    ],
  });
  response.status(200).send(articles);
};

const createArticle = async (request, response) => {
  console.log(request.body);
  const newArticle = {
    title: request.body.title,
    text: request.body.text,
    authorId: request.body.authorId,
  };
  const article = await ArticleModel.create(newArticle);
  response.status(200).send(article);
};

export { getAllArticles, createArticle };
