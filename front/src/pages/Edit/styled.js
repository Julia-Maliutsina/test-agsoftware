import styled from 'styled-components';

export const Article = styled.div`
  display: inline-flex;
  justify-content: space-between;
  vertical-align: bottom;
  margin: 0;
  width: calc(50% - 10px);
  padding: 25px 10px;
  border-bottom: 1px solid #77b8db;
  &:nth-child(2),
  :first-child {
    border-top: 1px solid #77b8db;
  }
  &:not(:nth-child(2n)) {
    margin-right: 20px;
  }
  &:hover {
    cursor: pointer;
    background: #dee7ef;
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
  height: 20px;
`;
export const ArticleInfo = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  height: 20px;
  align-items: end;
`;
export const ArticleDate = styled.span`
  width: 90px;
  text-align: right;
`;
export const ArticleAuthor = styled.span`
  text-align: right;
  width: calc(100% - 90px);
  color: #d0d0d6;
`;

export const ArticleAuthorName = styled.span`
  color: #000;
  padding-left: 5px;
`;

export const AddArticle = styled.div`
  margin: 15px 0;
  width: fit-content;
  height: fit-content;
`;
