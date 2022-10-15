import Image from "components/atoms/Image";
import Text from "components/atoms/Text";
import React from "react";
import styled from "styled-components";

interface Props {
  name: string;
  text: string;
}

const ContactItem = ({ name, text }: Props) => {
  return (
    <StyledContactItem>
      <Image name={name} />
      <Text>{text}</Text>
    </StyledContactItem>
  );
};

const StyledContactItem = styled.div`
  display: flex;
  margin: 4px 0;

  p {
    margin: 0 10px;
  }
`;

export default ContactItem;
