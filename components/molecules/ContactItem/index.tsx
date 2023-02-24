import React from "react";
import styled from "styled-components";
import Image from "next/image";
import Text from "components/atoms/Text";

interface Props {
  title: string;
  name: string;
  text: string | number;
}

const ContactItem = ({ title, name, text }: Props) => {
  return (
    <StyledContactItem>
      <Image
        src={`/image/${name}.png`}
        width={10}
        height={10}
        alt="ProfileIcon"
      />
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
