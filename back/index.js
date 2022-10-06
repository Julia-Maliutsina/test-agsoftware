import express from 'express';
import ArticleModel from './models/Article.js';
import UserModel from './models/User.js';

import { articlesRouter, usersRouter } from './routes/index.js';
import { sequelize } from './sequelize.js';

const PORT = 3000;

const app = express();

app.use(articlesRouter);
app.use(usersRouter);

async function runServer() {
  try {
    await sequelize.authenticate();
    app.listen(PORT, () => {
      console.log(`Office Gear server started on port: ${PORT}`);
    });
  } catch (e) {
    console.log(e);
  }
}

UserModel.hasMany(ArticleModel, {
  foreignKey: 'id',
  as: 'article',
});

ArticleModel.belongsTo(UserModel, {
  foreignKey: 'authorId',
  as: 'author',
});

runServer();
