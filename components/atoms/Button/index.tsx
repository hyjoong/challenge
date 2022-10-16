import React from "react";
import styled, { css } from "styled-components";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  styleType?: string;
  children: React.ReactNode;
}

type ButtonType = Pick<Props, "styleType">;

const Button = ({
  styleType = "default",
  onClick,
  children,
  ...props
}: Props) => {
  return (
    <StyledButton styleType={styleType} {...props} onClick={onClick}>
      {children}
    </StyledButton>
  );
};

const StyledButton = styled.button<ButtonType>`
  ${({ styleType }) =>
    (styleType === "default" &&
      css`
        font-size: 11px;
        padding: 2px 7px;
        border-radius: 5px;
        letter-spacing: -1px;
        color: ${({ theme }) => theme.color.black};
        background-color: ${({ theme }) => theme.color.white};
        border: 1px solid ${({ theme }) => theme.color.gray};
        transition: all 0.1s ease 0s;
        :hover {
          background-color: ${({ theme }) => theme.color.gray};
          color: ${({ theme }) => theme.color.white};
        }
      `) ||
    (styleType === "gray" &&
      css`
        padding: 2px 8.5px;

        color: ${({ theme }) => theme.color.darkGray};
        background-color: ${({ theme }) => theme.color.lightGray};
        font-weight: 600;
        border: none;
        border-radius: 3px;

        :hover {
          background-color: ${({ theme }) => theme.color.gray};
          color: ${({ theme }) => theme.color.white};
        }
      `) ||
    (styleType === "text" &&
      css`
        border: none;
        font-size: 12px;
        letter-spacing: -1.3px;
        color: ${({ theme }) => theme.color.gray};
        text-decoration: underline;

        :hover {
          color: ${({ theme }) => theme.color.darkGray};
        }
      `)};
`;

export default Button;
