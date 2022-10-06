import styled from 'styled-components';

export const DialogWrapper = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  left: 0;
  top: 0;
  background: #00000085;
  z-index: 10;
`;
export const Dialog = styled.div`
  position: absolute;
  top: calc(50% - 250px);
  left: 20%;
  background: #c7ddf0;
  width: 60%;
  height: 500px;
  border-radius: 5px;
  padding: 15px;
`;
export const DialogTitle = styled.div`
  padding: 0;
  margin-bottom: 10px;
  text-align: center;
  font-size: 20px;
  color: #0b5370;
  font-weight: 600;
  font-family: 'Poppins';
`;
export const InputTitle = styled.div`
  font-size: 20px;
  color: #0b5370;
  font-family: 'Poppins';
`;
export const NewArticleTitle = styled.input`
  width: 100%;
  padding: 5px;
  margin-bottom: 10px;
  outline: none;
  font-size: 18px;
  line-height: 18px;
  border-radius: 5px;
  border: 1px solid #d0d0d6;
`;
export const NewArticleText = styled.textarea`
  width: 100%;
  padding: 5px;
  margin-bottom: 10px;
  height: 300px;
  resize: none;
  overflow-y: auto;
  outline: none;
  font-size: 18px;
  line-height: 18px;
  border-radius: 5px;
  border: 1px solid #d0d0d6;
`;
export const ButtonWrapper = styled.div`
  width: fit-content;
  height: fit-content;
  margin-top: 5px;
`;
