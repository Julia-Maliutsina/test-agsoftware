import { Layout } from '../../components/layout';
import { Button } from '../../components/shared/button';
import { AddArticleDialog } from '../../components/addArticleDialog';
import {
  Article,
  ArticleTitle,
  ArticleInfo,
  ArticleDate,
  ArticleAuthor,
  ArticleAuthorName,
  AddArticle,
} from './styled';

const Edit = ({ articles, toggleAddOpen, isAddOpen }) => (
  <Layout pagename="edit">
    <AddArticle onClick={() => toggleAddOpen()}>
      <Button>Add new article</Button>
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
    {isAddOpen && <AddArticleDialog toggleAddOpen={toggleAddOpen} />}
  </Layout>
);

export default Edit;
