import { useState } from 'react';

import updateArticle from '../../api/updateArticle';

import { ArticleDialog } from '../shared/articleDialog';

const AddArticleContainer = ({ toggleEditOpen, id, titleInit, textInit }) => {
  const [title, setTitle] = useState(titleInit);
  const [text, setText] = useState(textInit);

  const closeEdit = () => {
    toggleEditOpen({});
  };

  const saveArticle = () => {
    if (text.length > 2 && title.length > 1) {
      updateArticle(id, title, text);
      closeEdit();
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
      dialogTitle="Edit article"
      toggleAddOpen={closeEdit}
      saveArticle={saveArticle}
      title={title}
      text={text}
      changeText={changeText}
      changeTitle={changeTitle}
    />
  );
};

export default AddArticleContainer;
