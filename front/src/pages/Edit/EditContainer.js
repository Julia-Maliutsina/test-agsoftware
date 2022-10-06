import { useState } from 'react';

import useGetArticles from '../../api/getArticles';
import Edit from './Edit';

const EditContainer = () => {
  const { data, isLoading } = useGetArticles();

  const [isAddOpen, setAddOpen] = useState(false);
  const [articleInEdit, setArticleInEdit] = useState({});

  const toggleAddOpen = () => {
    setAddOpen(!isAddOpen);
  };

  const chooseArticleToEdit = (article) => {
    const chosenArticle = {
      id: article.id,
      title: article.title,
      text: article.text,
    };
    setArticleInEdit(chosenArticle);
  };

  return isLoading ? (
    'Loading...'
  ) : (
    <Edit
      articles={data}
      toggleAddOpen={toggleAddOpen}
      isAddOpen={isAddOpen}
      chooseArticleToEdit={chooseArticleToEdit}
      articleInEdit={articleInEdit}
    />
  );
};

export default EditContainer;
