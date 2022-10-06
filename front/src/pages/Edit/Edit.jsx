import { Layout } from '../../components/layout';
import {
  Article,
  ArticleTitle,
  ArticleInfo,
  ArticleDate,
  ArticleAuthor,
  ArticleAuthorName,
  AddArticleButton,
  AddArticle,
} from './styled';

const Edit = ({ articles }) => (
  <Layout pagename="edit">
    <AddArticle>
      <AddArticleButton>Add new article</AddArticleButton>
    </AddArticle>
    <div>
      {articles.map((article) => (
        <Article key={article.id}>
          <ArticleTitle>{article.title}</ArticleTitle>
          <ArticleInfo>
            <ArticleAuthor>
              by
              <ArticleAuthorName>
                {article.author.name} {article.author.lastName}
              </ArticleAuthorName>
            </ArticleAuthor>
            <ArticleDate>{article.createdAt.substr(0, 10)}</ArticleDate>
          </ArticleInfo>
        </Article>
      ))}
    </div>
  </Layout>
);

export default Edit;
