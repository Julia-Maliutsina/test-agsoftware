import { Layout } from '../../components/layout';
import {
  Article,
  ArticleTitle,
  ArticleText,
  ArticleInfo,
  ArticleDate,
  ArticleAuthor,
} from './styled';

const ARTICLES = [
  {
    article_id: 'd100001',
    article_title: 'Lorem ipsum dolor',
    article_text:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sollicitudin ipsum ut lorem viverra, sit amet lacinia lacus finibus. In tellus leo, vehicula sed erat quis, scelerisque ullamcorper magna. Quisque in ultricies massa. Praesent semper vehicula metus vel posuere. Integer mollis leo vitae leo finibus tincidunt. Fusce vel est risus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam pretium maximus pharetra. Vestibulum enim augue, sollicitudin quis congue quis, convallis a diam. Pellentesque et elit dignissim, consectetur nulla a, dictum neque. Quisque quis magna lorem. Nulla at risus sed elit iaculis vulputate nec et lorem. Maecenas et dui orci. Ut euismod varius dolor, sed lobortis nisl ornare sed.',
    article_date: '11/09/2022',
    user_name: 'name',
    user_surname: 'surname',
  },
  {
    article_id: 'o200002',
    article_title: 'Donec commodo nulla',
    article_text:
      'Etiam ornare sagittis risus, id suscipit ipsum convallis id. Cras faucibus id massa eu feugiat. In in pretium enim. Phasellus eu sollicitudin mauris. Nam in velit ac nisi gravida dignissim. Donec commodo nulla in dapibus porttitor. Ut blandit, sapien sed egestas dignissim, ligula magna malesuada purus, ut mollis elit dolor sit amet neque. Etiam libero enim, iaculis in lacus sit amet, imperdiet scelerisque ligula.',
    article_date: '14/09/2022',
    user_name: 'author',
    user_surname: 'surname123',
  },
  {
    article_id: 'i300003',
    article_title: 'Donec et bibendum turpis',
    article_text:
      'Donec et bibendum turpis. Donec non sapien nec lacus maximus iaculis quis ac sem. In hac habitasse platea dictumst. Cras eu consectetur massa. Nulla malesuada maximus orci, vitae congue felis cursus quis. Morbi ac diam et libero tincidunt auctor. Ut purus felis, lobortis ac fermentum quis, dignissim quis quam. Duis ut odio in odio dignissim porttitor. Cras mattis mauris ut eros viverra maximus. Vestibulum pellentesque velit et tortor ullamcorper, in eleifend nunc feugiat. Sed suscipit neque mauris, a aliquam diam feugiat in. In placerat leo massa, vel ultrices sapien maximus at. Curabitur eu eleifend purus, sit amet aliquam odio. Curabitur mollis nisl fringilla, porttitor tellus sed, vestibulum sem.',
    article_date: '19/09/2022',
    user_name: 'name',
    user_surname: 'surname',
  },
];

const Articles = () => (
  <Layout pagename="articles">
    {ARTICLES.map((article) => (
      <Article key={article.article_id}>
        <ArticleTitle>{article.article_title}</ArticleTitle>
        <ArticleText>{article.article_text}</ArticleText>
        <ArticleInfo>
          <ArticleDate>{article.article_date}</ArticleDate>
          <ArticleAuthor>
            {article.user_name} {article.user_name}
          </ArticleAuthor>
        </ArticleInfo>
      </Article>
    ))}
  </Layout>
);

export default Articles;
