import React, { InputHTMLAttributes } from "react";
import styled from "styled-components";
import CheckboxInput from "components/atoms/CheckboxInput";
import Label from "components/atoms/Label";
import Text from "components/atoms/Text";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  number?: number;
  song?: string;
  artist?: string;
  checked?: boolean;
}

const Checkbox = ({ number, song, artist, checked, ...props }: Props) => {
  return (
    <StyledCheckbox>
      <CheckboxInput type="checkbox" id={song} checked={checked} {...props} />
      <Label htmlFor={song}>
        <Text>{number}</Text>
        <Text>{song}</Text>
        <Text>{artist}</Text>
      </Label>
    </StyledCheckbox>
  );
};

const StyledCheckbox = styled.div`
  display: flex;
  border-bottom: 1px dashed ${({ theme }) => theme.color.gray};

  input {
    margin: 3px 20px;
  }

  label {
    display: flex;
    align-items: center;
    &:hover {
      text-decoration: underline;
    }

    > p {
      cursor: pointer;

      :nth-child(1) {
        width: 60px;
        justify-content: center;
      }
      :nth-child(2) {
        width: 210px;
        color: ${({ theme }) => theme.color.turquoise};
      }
      :nth-child(3) {
        color: ${({ theme }) => theme.color.turquoise};
      }
    }
  }
`;

export default Checkbox;
