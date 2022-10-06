import { DataTypes } from 'sequelize';

import { sequelize } from '../sequelize.js';

const ArticleModel = sequelize.define(
  'Article',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    title: DataTypes.STRING,
    text: DataTypes.STRING,
    createdAt: DataTypes.DATE,
    authorId: DataTypes.INTEGER,
  },
  { tableName: 'article', timestamps: false },
);

export default ArticleModel;
