import Text from "components/atoms/Text";
import React from "react";
import styled from "styled-components";

interface Props {
  lottoNumbers: string[];
}

const LottoNumbers = ({ lottoNumbers }: Props) => {
  return (
    <StyledLottoNumbers>
      {lottoNumbers?.map((number, index) => (
        <Text key={index}>{number}</Text>
      ))}
    </StyledLottoNumbers>
  );
};

const StyledLottoNumbers = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 110px;
  padding: 0 10px;
  height: 21px;
  color: ${({ theme }) => theme.color.black};
  background-color: ${({ theme }) => theme.color.yellow};
  border: 1px solid ${({ theme }) => theme.color.black};
  border-radius: 8px;

  > p {
    font-weight: 600;
  }
`;

export default LottoNumbers;
