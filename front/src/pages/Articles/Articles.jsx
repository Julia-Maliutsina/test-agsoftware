import { Layout } from '../../components/layout';
import {
  Article,
  ArticleTitle,
  ArticleText,
  ArticleInfo,
  ArticleDate,
  ArticleAuthor,
} from './styled';

const Articles = ({ articles }) => (
  <Layout pagename="articles">
    {articles.map((article) => (
      <Article key={article.id}>
        <ArticleTitle>{article.title}</ArticleTitle>
        <ArticleText>{article.text}</ArticleText>
        <ArticleInfo>
          <ArticleDate>{article.createdAt.substr(0, 10)}</ArticleDate>
          <ArticleAuthor>
            {article.author.name} {article.author.lastName}
          </ArticleAuthor>
        </ArticleInfo>
      </Article>
    ))}
  </Layout>
);

export default Articles;
