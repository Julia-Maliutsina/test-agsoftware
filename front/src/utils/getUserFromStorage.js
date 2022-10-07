const userInfo = () => {
  const user = localStorage.getItem('userInfo');
  return JSON.parse(user);
};

export default userInfo;
