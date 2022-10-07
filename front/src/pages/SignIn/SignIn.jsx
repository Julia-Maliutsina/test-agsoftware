import { Button } from '../../components/shared/button';
import {
  SignInWrapper,
  WelcomeMessage,
  SignInForm,
  LogIn,
  InputTitle,
  Input,
  Password,
  ButtonWrapper,
  Error,
} from './styled';

const SignIn = ({ username, password, setUsername, setPassword, logIn, error }) => (
  <SignInWrapper>
    <WelcomeMessage>
      <h2>Welcome to Articles app!</h2>
      <p>Please, sign in to continue.</p>
    </WelcomeMessage>
    <SignInForm>
      <LogIn>
        <InputTitle>Username:</InputTitle>
        <Input value={username} onChange={(e) => setUsername(e.target.value)} />
      </LogIn>
      <Password>
        <InputTitle>Password:</InputTitle>
        <Input value={password} onChange={(e) => setPassword(e.target.value)} />
      </Password>
      <ButtonWrapper
        onClick={(e) => {
          e.preventDefault();
          logIn();
        }}
      >
        <Button>Sign In</Button>
      </ButtonWrapper>
      <Error>{error}</Error>
    </SignInForm>
  </SignInWrapper>
);

export default SignIn;
