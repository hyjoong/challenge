import React, { InputHTMLAttributes } from "react";
import styled from "styled-components";

interface Props extends InputHTMLAttributes<HTMLTextAreaElement> {}
const TextArea = ({ ...props }: Props) => {
  return <StyledTextArea {...props} />;
};

const StyledTextArea = styled.textarea`
  color: #888888;
  padding: 10px 8px;
  border: 1px solid ${({ theme }) => theme.color.lightGray};
  border-radius: 3px;
  outline: none;
  resize: none;

  &::placeholder {
    color: #9ca3af;
  }

  &:not(:placeholder-shown) {
    color: #6b7280;
    border: 1px solid ${({ theme }) => theme.color.gray};
  }
`;

export default TextArea;
