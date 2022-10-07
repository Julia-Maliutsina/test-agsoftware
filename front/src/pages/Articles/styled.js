import styled from 'styled-components';

export const Article = styled.div`
  margin: 10px 0 0 0;
  width: 100%;
  padding: 15px 0;
  &:not(:last-child) {
    border-bottom: 1px solid #77b8db;
  }
`;
export const ArticleTitle = styled.div`
  padding: 0;
  margin: 0;
  text-align: center;
  font-size: 20px;
  color: #0b5370;
  font-weight: 600;
  font-family: 'Poppins';
`;
export const ArticleText = styled.div`
  margin: 10px 0;
  text-align: justify;
`;
export const ArticleInfo = styled.div`
  display: flex;
  justify-content: space-between;
  color: #afcfdb;
  font-size: 16px;
`;
export const ArticleDate = styled.div``;
export const ArticleAuthor = styled.div``;
