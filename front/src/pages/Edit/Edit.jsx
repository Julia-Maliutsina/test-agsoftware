import { Layout } from '../../components/layout';
import { Article, ArticleTitle, ArticleInfo, ArticleDate, ArticleAuthor } from './styled';

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
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sollicitudin ipsum ut lorem viverra, sit amet lacinia lacus finibus. In tellus leo, vehicula sed erat quis, scelerisque ullamcorper magna. Quisque in ultricies massa. Praesent semper vehicula metus vel posuere. Integer mollis leo vitae leo finibus tincidunt. Fusce vel est risus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam pretium maximus pharetra. Vestibulum enim augue, sollicitudin quis congue quis, convallis a diam. Pellentesque et elit dignissim, consectetur nulla a, dictum neque. Quisque quis magna lorem. Nulla at risus sed elit iaculis vulputate nec et lorem. Maecenas et dui orci. Ut euismod varius dolor, sed lobortis nisl ornare sed. Curabitur nec ipsum tristique, euismod eros ut, bibendum tellus. Vestibulum feugiat purus eu dolor tempor facilisis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer nibh augue, pulvinar euismod elit vel, tincidunt placerat neque. Nunc condimentum sed enim at ullamcorper. Aliquam iaculis velit eget felis iaculis tristique. Mauris magna eros, ultricies eu rutrum ac, maximus nec dolor. Maecenas auctor, tellus ac sollicitudin tincidunt, tellus ex elementum erat, eu faucibus neque enim ut lorem. Sed est massa, elementum in diam ac, finibus gravida purus.',
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
    user_name: 'Donecetbibenog',
    user_surname: 'Ardrrdhgfchfhfd',
  },
];

const Edit = () => (
  <Layout pagename="edit">
    {ARTICLES.map((article) => (
      <Article key={article.article_id}>
        <ArticleTitle>{article.article_title}</ArticleTitle>
        <ArticleInfo>
          <ArticleAuthor>
            {article.user_name} {article.user_name}
          </ArticleAuthor>
          <ArticleDate>{article.article_date}</ArticleDate>
        </ArticleInfo>
      </Article>
    ))}
  </Layout>
);

export default Edit;
