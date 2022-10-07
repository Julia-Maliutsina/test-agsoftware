import { Layout } from '../../components/layout';
import { Button } from '../../components/shared/button';
import { AddArticleDialog } from '../../components/addArticle';
import { EditArticleDialog } from '../../components/editArticle';
import {
  Article,
  ArticleTitle,
  ArticleInfo,
  ArticleDate,
  ArticleAuthor,
  ArticleAuthorName,
  AddArticle,
} from './styled';

const Edit = ({ articles, toggleAddOpen, isAddOpen, chooseArticleToEdit, articleInEdit }) => (
  <Layout pagename="edit">
    <AddArticle onClick={() => toggleAddOpen()}>
      <Button>Add new article</Button>
    </AddArticle>
    <div>
      {articles.map((article) => (
        <Article key={article.id} onClick={() => chooseArticleToEdit(article)}>
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
    {articleInEdit.id && (
      <EditArticleDialog
        toggleEditOpen={chooseArticleToEdit}
        id={articleInEdit.id}
        titleInit={articleInEdit.title}
        textInit={articleInEdit.text}
      />
    )}
  </Layout>
);

export default Edit;
