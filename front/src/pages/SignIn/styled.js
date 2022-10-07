import styled from 'styled-components';

export const SignInWrapper = styled.div`
  background: #fff;
  width: 100vw;
  height: 100vh;
  text-align: center;
  padding: 30px;
`;
export const WelcomeMessage = styled.div`
  font-family: 'Poppins';
  font-size: 22px;
  color: #0b5370;
`;
export const SignInForm = styled.form`
  width: 300px;
  height: 210px;
  border-radius: 5px;
  background: #77b8db;
  margin-left: auto;
  margin-right: auto;
  padding: 10px;
`;
export const LogIn = styled.div`
  height: 40%;
  padding: 5px 0;
  font-size: 18px;
  text-align: left;
`;
export const InputTitle = styled.div`
  margin-bottom: 8px;
`;
export const Input = styled.input`
  width: 100%;
  height: 26px;
  padding: 4px;
  font-size: 18px;
  line-height: 18px;
  border-radius: 5px;
  border: 1px solid #d0d0d6;
  outline: none;
`;
export const Password = styled.div`
  height: 40%;
  padding: 5px 0;
  font-size: 18px;
  text-align: left;
`;

export const ButtonWrapper = styled.div`
  width: fit-content;
  height: fit-content;
  margin-top: 10px;
  padding: 0;
  display: inline-block;
`;

export const Error = styled.div`
  display: inline-block;
  color: #b3302b;
  font-size: 16px;
  width: 180px;
  margin: 0 15px;
  font-weight: 500;
`;
