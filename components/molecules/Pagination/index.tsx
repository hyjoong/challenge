import React from "react";
import styled from "styled-components";
import Button from "components/atoms/Button";
import Image from "next/image";
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
        <Image
          src={`/image/${page === 1 ? "arrowLeftDisabled" : "arrowLeft"}.png`}
          width={10}
          height={16}
          alt="arrow"
        />
      </Button>
      <Title>{page}</Title>
      <Button styleType="arrow" disabled={isEndPage} onClick={handleNextPage}>
        <Image
          src={`/image/${isEndPage ? "arrowRightDisabled" : "arrowRight"}.png`}
          width={10}
          height={16}
          alt="arrow"
        />
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
