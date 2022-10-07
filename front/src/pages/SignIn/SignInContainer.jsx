import { useState } from 'react';
import authorize from '../../api/authorization';

import SignIn from './SignIn';

const SignInContainer = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const logIn = () => {
    if (username && password) {
      authorize(username, password, setError);
    } else {
      setError('Fill in all fields');
    }
  };

  return (
    <SignIn
      username={username}
      password={password}
      setUsername={setUsername}
      setPassword={setPassword}
      logIn={logIn}
      error={error}
    />
  );
};

export default SignInContainer;
