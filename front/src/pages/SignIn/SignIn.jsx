import { Button } from '../../components/shared/button';
import {
  SignInWrapper,
  WelcomeMessage,
  SignInForm,
  LogIn,
  InputTitle,
  Input,
  Password,
} from './styled';

const SignIn = () => {
  return (
    <SignInWrapper>
      <WelcomeMessage>
        <h2>Welcome to Articles app!</h2>
        <p>Please, sign in to continue.</p>
      </WelcomeMessage>
      <SignInForm>
        <LogIn>
          <InputTitle>Username:</InputTitle>
          <Input />
        </LogIn>
        <Password>
          <InputTitle>Password:</InputTitle>
          <Input />
        </Password>
        <Button>Sign In</Button>
      </SignInForm>
    </SignInWrapper>
  );
};

export default SignIn;
