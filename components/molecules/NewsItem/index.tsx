import React from "react";
import styled from "styled-components";
import Chip from "components/atoms/Chip";
import { BoardReturn } from "lib/graphql/queries/schema";

interface Props {
  title: BoardReturn["title"];
  id: BoardReturn["number"];
  onClick: (id: BoardReturn["number"]) => void;
}

const NewsItem = ({ title, id, onClick }: Props) => {
  return (
    <StyledNewsItem>
      <Chip type="diary">다이어리</Chip>
      <p onClick={() => onClick(id)}>{title}</p>
    </StyledNewsItem>
  );
};

const StyledNewsItem = styled.div`
  display: flex;
  margin: 5px 0;
  width: 230px;
  overflow: hidden;
  white-space: nowrap;

  p {
    font-size: 11px;
    margin-left: 5px;
    display: flex;
    align-items: center;
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export default NewsItem;
