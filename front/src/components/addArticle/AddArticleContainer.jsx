import { useState } from 'react';

import postArticle from '../../api/postArticle';

import { ArticleDialog } from '../shared/articleDialog';

const AddArticleContainer = ({ toggleAddOpen }) => {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');

  const saveArticle = () => {
    if (text.length > 2 && title.length > 1) {
      postArticle(title, text);
      toggleAddOpen();
    }
  };

  const changeTitle = (titleValue) => {
    setTitle(titleValue);
  };
  const changeText = (textValue) => {
    setText(textValue);
  };

  return (
    <ArticleDialog
      dialogTitle="Add new article"
      toggleAddOpen={toggleAddOpen}
      saveArticle={saveArticle}
      title={title}
      text={text}
      changeText={changeText}
      changeTitle={changeTitle}
    />
  );
};

export default AddArticleContainer;
