import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize('articlesdb', 'root', 'QQpoQQ)(8', {
  host: 'localhost',
  dialect: 'mysql',
});
