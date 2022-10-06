import useGetArticles from '../../api/getArticles';
import Edit from './Edit';

const EditContainer = () => {
  const { data, isLoading } = useGetArticles();

  return isLoading ? 'Loading...' : <Edit articles={data} />;
};

export default EditContainer;
