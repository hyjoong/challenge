import React from "react";
import styled, { css } from "styled-components";

export interface Props
  extends Pick<React.ButtonHTMLAttributes<HTMLButtonElement>, "onClick"> {
  isActive?: boolean;
  index: number;
  value?: string;
  children: React.ReactNode;
}

type TabType = Pick<Props, "index" | "isActive">;

const Tab = ({ isActive, onClick, index, value, children }: Props) => {
  return (
    <StyledTab
      index={index}
      isActive={isActive}
      onClick={onClick}
      value={value}
    >
      {children}
    </StyledTab>
  );
};

const StyledTab = styled.button<TabType>`
  position: absolute;
  right: -17.5px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 32px;
  font-size: 13px;
  border: 1px solid ${({ theme }) => theme.color.turquoise};
  border-radius: 0px 5px 5px 0px;
  cursor: pointer;
  background-color: ${({ theme, isActive }) =>
    isActive ? theme.color.white : theme.color.darkSkyBlue};
  color: ${({ theme, isActive }) =>
    isActive ? theme.color.black : theme.color.white};
  ${({ index }) =>
    index === 0
      ? css`
          top: 85px;
        `
      : css`
          top: ${`${index * 37 + 85}px`};
        `}
`;

export default Tab;
