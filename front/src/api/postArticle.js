import axios from 'axios';

const AUTHOR = 2;

const postArticle = async (title, text) => {
  let newArticle = {
    title: title,
    text: text,
    authorId: AUTHOR,
  };
  JSON.stringify(newArticle);
  const config = {
    method: 'post',
    url: 'http://localhost:3000/articles',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    data: newArticle,
  };
  const response = await axios(config);
  return response.data;
};

export default postArticle;
