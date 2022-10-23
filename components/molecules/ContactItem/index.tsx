import Image from "components/atoms/Image";
import Text from "components/atoms/Text";
import React from "react";
import styled from "styled-components";

interface Props {
  title?: string;
  name: string;
  text: string | number;
}

const ContactItem = ({ title, name, text }: Props) => {
  return (
    <StyledContactItem>
      <Image name={name} />
      <Text>{title} : </Text>
      <Text>{text}</Text>
    </StyledContactItem>
  );
};

const StyledContactItem = styled.div`
  display: flex;
  margin: 4px 0;

  p {
    :nth-child(2) {
      margin: 0 4px;
    }
    :nth-child(3) {
      margin-left: 2px;
    }
  }
`;

export default ContactItem;
