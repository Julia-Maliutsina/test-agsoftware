import axios from 'axios';

const authorize = async (username, password, setError) => {
  try {
    let loginPayload = {
      username: username,
      password: password,
    };
    JSON.stringify(loginPayload);
    const config = {
      method: 'post',
      url: 'http://localhost:4000/login',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      data: loginPayload,
    };
    const response = await axios(config);
    setError('');
    localStorage.setItem('userInfo', JSON.stringify(response.data.user));
    localStorage.setItem('token', JSON.stringify(response.data.token));
    window.location = '/articles';
    return response.data;
  } catch (error) {
    setError(error.response.data.message);
  }
};

export default authorize;
