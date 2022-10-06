import { useState } from 'react';

import useGetArticles from '../../api/getArticles';
import Edit from './Edit';

const EditContainer = () => {
  const { data, isLoading } = useGetArticles();

  const [isAddOpen, setAddOpen] = useState(false);

  const toggleAddOpen = () => {
    setAddOpen(!isAddOpen);
  };

  return isLoading ? (
    'Loading...'
  ) : (
    <Edit articles={data} toggleAddOpen={toggleAddOpen} isAddOpen={isAddOpen} />
  );
};

export default EditContainer;
