import React from "react";
import styled from "styled-components";
import Divider from "components/atoms/Divider";
import Image from "components/atoms/Image";
import Text from "components/atoms/Text";
import ContactItem from "components/molecules/ContactItem";
import SelectBox from "components/molecules/SelectBox";
import { contactList, emotionList } from "constants/index";

const Profile = () => {
  return (
    <StyledProfile>
      <ProfileInfo>
        <Image name="profile" />
        <Divider />
        {contactList.map((item, index) => (
          <ContactItem name={item.name} text={item.text} key={index} />
        ))}
      </ProfileInfo>
      <ProfileEmotion>
        <Text>오늘의 기분</Text>
        <SelectBox optionList={emotionList} />
      </ProfileEmotion>
    </StyledProfile>
  );
};

const StyledProfile = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 148px;
  padding: 30px;
  margin-right: 2px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.color.white};
`;

const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const ProfileEmotion = styled.div`
  display: flex;
  flex-direction: column;
  > p {
    margin-bottom: 5px;
    font-weight: bold;
  }
`;

export default Profile;
