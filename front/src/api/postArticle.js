import axios from 'axios';

import getToken from '../utils/getTokenFronStorage';
import userInfo from '../utils/getUserFromStorage';

const postArticle = async (title, text) => {
  const token = getToken();
  const user = userInfo();
  let newArticle = {
    title: title,
    text: text,
    authorId: user.id,
  };
  JSON.stringify(newArticle);
  const config = {
    method: 'post',
    url: 'http://localhost:4000/articles',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: 'Bearer ' + token,
    },
    data: newArticle,
  };
  const response = await axios(config);
  window.location.reload();
  return response.data;
};

export default postArticle;
