const getToken = () => {
  const token = localStorage.getItem('token');
  return JSON.parse(token);
};

export default getToken;
