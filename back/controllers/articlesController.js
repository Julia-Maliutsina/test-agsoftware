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

export { getAllArticles };
