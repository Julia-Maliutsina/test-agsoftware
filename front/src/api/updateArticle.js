import axios from 'axios';

const updateArticle = async (id, title, text) => {
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
    },
    data: updatedArticle,
  };
  const response = await axios(config);
  return response.data;
};

export default updateArticle;
