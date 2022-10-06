import styled from 'styled-components';

export const MenuWrapper = styled.div`
  font-family: 'Poppins';
  width: 100%;
  height: 60px;
  background: #77b8db;
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  justify-content: space-between;
  padding: 10px 30px;
  margin-bottom: 10px;
`;

export const MenuList = styled.ul`
  height: 40px;
  margin: 0;
  padding: 0;
`;

export const MenuItem = styled.li`
  display: inline-block;
  padding: 10px;
  font-size: 20px;
  padding-bottom: ${(props) => (props.selected ? '0' : '3px')};
  color: ${(props) => (props.selected ? '#FFF' : '#0B5370')};
  border-bottom: ${(props) => (props.selected ? '3px solid #fff' : 'none')};
  &:first-letter {
    text-transform: capitalize;
  }
  &:hover {
    color: #fff;
    cursor: pointer;
  }
`;

export const User = styled.div`
  display: flex;
`;

export const UserInfo = styled.div`
  height: 40px;
  margin: 0;
  padding: 5px;
`;

export const UserName = styled.p`
  font-size: 16px;
  line-height: 16px;
  margin: 0 0 2px 0;
  color: white;
`;
export const UserRole = styled.p`
  font-size: 16px;
  line-height: 16px;
  margin: 0;
  color: #0b5370;
`;

export const LogOutButton = styled.button`
  height: 20px;
  align-self: center;
  margin-left: 20px;
  background: #0b5370;
  color: #fff;
  border: none;
  border-radius: 4px;
  &:hover {
    background: #fff;
    color: #0b5370;
    cursor: pointer;
  }
`;
