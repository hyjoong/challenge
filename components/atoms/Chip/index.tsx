import React from "react";
import styled, { css } from "styled-components";

interface Props {
  type: "diary" | "date" | "new";
  children: React.ReactNode;
}

const Chip = ({ type, children }: Props) => {
  return <StyledChip type={type}>{children}</StyledChip>;
};

const StyledChip = styled.div<{ type: string }>`
  display: flex;
  padding: 2px;
  color: ${({ theme }) => theme.color.white};
  font-size: 7px;
  border-radius: 1px;
  ${({ type }) =>
    (type === "diary" &&
      css`
        background-color: ${({ theme }) => theme.color.scarlet};
      `) ||
    (type === "date" &&
      css`
        background-color: ${({ theme }) => theme.color.skyBlue};
      `) ||
    (type === "new" &&
      css`
        background-color: ${({ theme }) => theme.color.orange};
        border-radius: 2px;
        padding: 1px 2px;
        font-weight: 600;
      `)};
`;

export default Chip;
