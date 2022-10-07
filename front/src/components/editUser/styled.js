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
  width: 300px;
  height: 210px;
  border-radius: 5px;
  background: #c7ddf0;
  padding: 10px;
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
export const UsernameTitle = styled.div`
  font-size: 20px;
  color: #0b5370;
  font-family: 'Poppins';
`;
export const Username = styled.div`
  font-size: 18px;
  color: #000;
  font-family: 'Poppins';
`;
export const SelectRoleTitle = styled.div`
  font-size: 20px;
  color: #0b5370;
  font-family: 'Poppins';
  margin-top: 10px;
`;
export const SelectRole = styled.select`
  font-size: 18px;
  color: #000;
  font-family: 'Poppins';
`;
export const ButtonWrapper = styled.div`
  width: fit-content;
  height: fit-content;
  margin-top: 15px;
`;
