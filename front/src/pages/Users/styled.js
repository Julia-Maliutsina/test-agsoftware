import styled from 'styled-components';

const ROLES = {
  admin: 'admin',
  editor: 'editor',
  user: 'user',
};

export const User = styled.div`
  display: inline-block;
  margin: 0;
  width: calc(50% - 10px);
  padding: 25px 10px;
  border-bottom: 1px solid #77b8db;
  &:not(:nth-child(2n)) {
    margin-right: 20px;
  }
`;
export const UserName = styled.div`
  display: inline-block;
  width: 35%;
  height: 22px;
  font-size: 18px;
  color: #0b5370;
  font-weight: 600;
  font-family: 'Poppins';
`;
export const UserLogin = styled.div`
  display: inline-block;
  margin-left: 5%;
  margin-right: 5%;
  width: 35%;
  text-align: center;
  height: 22px;
  font-size: 16px;
`;
export const UserRoleWrapper = styled.div`
  display: inline-block;
  width: 20%;
  text-align: right;
  height: 22px;
`;

export const UserRole = styled.div`
  display: inline-block;
  width: fit-content;
  text-align: right;
  border-radius: 8px;
  padding: 1px 4px;
  height: 20px;
  font-size: 16px;
  line-height: 16px;
  background: ${(props) => (props.role === ROLES.admin ? '#F0645E' : '#66FA89')};
  &:hover {
    cursor: pointer;
    background: #dee7ef;
  }
`;
