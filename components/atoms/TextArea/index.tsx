import React, { InputHTMLAttributes } from "react";
import styled from "styled-components";

interface Props extends InputHTMLAttributes<HTMLTextAreaElement> {
  placeholder?: string;
}
const TextArea = ({ placeholder, ...props }: Props) => {
  return <StyledTextArea placeholder={placeholder} {...props} />;
};

const StyledTextArea = styled.textarea`
  padding: 10px 8px;
  border: 1px solid ${({ theme }) => theme.color.lightGray};
  border-radius: 3px;
  outline: none;
  resize: none;
`;

export default TextArea;
