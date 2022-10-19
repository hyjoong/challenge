import React from "react";
import styled, { css } from "styled-components";

interface Props {
  type: "diary" | "date" | "new";
  children: React.ReactNode;
}

type ChipType = Pick<Props, "type">;

const Chip = ({ type, children }: Props) => {
  return <StyledChip type={type}>{children}</StyledChip>;
};

const StyledChip = styled.div<ChipType>`
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
        font-size: 10px;
        font-weight: 600;
        border-radius: 3px;
        padding: 3px;
        background-color: ${({ theme }) => theme.color.skyBlue};
      `) ||
    (type === "new" &&
      css`
        background-color: ${({ theme }) => theme.color.orange};
        border-radius: 2px;
        padding: 0.5px 2px;
        font-weight: 600;
      `)};
`;

export default Chip;
