import React from "react";
import styled from "styled-components";
import Button from "components/atoms/Button";
import Image from "components/atoms/Image";
import Title from "components/atoms/Title";

interface Props {
  page: number;
  isEndPage: boolean;
  handlePrevPage: () => void;
  handleNextPage: () => void;
}

const Pagination = ({
  page,
  isEndPage,
  handlePrevPage,
  handleNextPage,
}: Props) => {
  return (
    <StyledPagination>
      <Button styleType="arrow" disabled={page === 1} onClick={handlePrevPage}>
        <Image name={page === 1 ? "arrowLeftDisabled" : "arrowLeft"} />
      </Button>
      <Title>{page}</Title>
      <Button styleType="arrow" disabled={isEndPage} onClick={handleNextPage}>
        <Image name={isEndPage ? "arrowRightDisabled" : "arrowRight"} />
      </Button>
    </StyledPagination>
  );
};

const StyledPagination = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 10px;
  height: 20px;

  p {
    color: ${({ theme }) => theme.color.darkGray};
    margin: 0 7px;
  }
`;

export default Pagination;
