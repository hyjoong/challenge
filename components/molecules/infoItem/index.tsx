import Input from "components/atoms/Input";
import Title from "components/atoms/Title";
import React from "react";
import styled from "styled-components";

interface Props {
  name: string;
  value: string | number;
  type?: string;
  placeholder?: string;
  readOnly?: boolean;
  onChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}

const InfoItem = ({
  name,
  value,
  type,
  placeholder,
  readOnly,
  onChange,
}: Props) => {
  return (
    <StyledInfo>
      <Title>{name}: </Title>
      <Input
        name={name}
        value={value ?? ""}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        readOnly={readOnly}
        maxLength={10}
      />
    </StyledInfo>
  );
};

const StyledInfo = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin: 5px 0;

  > p {
    margin-right: 10px;
  }

  input::-webkit-inner-spin-button {
    appearance: none;
    -moz-appearance: none;
    -webkit-appearance: none;
  }
`;

export default InfoItem;
