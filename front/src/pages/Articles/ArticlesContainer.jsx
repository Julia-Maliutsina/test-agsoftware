import useGetArticles from '../../api/getArticles';
import Articles from './Articles';

const ArticlesContainer = () => {
  const { data, isLoading } = useGetArticles();

  return isLoading ? 'Loading...' : <Articles articles={data} />;
};

export default ArticlesContainer;
