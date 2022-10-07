import axios from 'axios';

import getToken from '../utils/getTokenFronStorage';

const updateArticle = async (id, title, text) => {
  const token = getToken();
  let updatedArticle = {
    title: title,
    text: text,
  };
  JSON.stringify(updatedArticle);
  const config = {
    method: 'put',
    url: `http://localhost:4000/articles/${id}`,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: 'Bearer ' + token,
    },
    data: updatedArticle,
  };
  const response = await axios(config);
  window.location.reload();
  return response.data;
};

export default updateArticle;
