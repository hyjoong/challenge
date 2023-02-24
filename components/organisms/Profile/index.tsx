import React, { useEffect } from "react";
import styled from "styled-components";
import Image from "next/image";
import { useRouter } from "next/router";
import {
  GetProfileQueryResult,
  GetProfileQueryVariables,
  useGetProfileQuery,
} from "lib/graphql/queries/schema";
import Divider from "components/atoms/Divider";
import Text from "components/atoms/Text";
import ContactItem from "components/molecules/ContactItem";
import SelectBox from "components/molecules/SelectBox";
import { contactList, defaultWritter, emotionList } from "constants/index";

const Profile = () => {
  const router = useRouter();
  const { data: profileData, refetch } = useGetProfileQuery({
    variables: { name: defaultWritter } as GetProfileQueryVariables,
  }) as GetProfileQueryResult;

  useEffect(() => {
    if (router.pathname === "/info") {
      refetch();
    }
  }, [router]);

  return (
    <StyledProfile>
      <ProfileInfo>
        <Image
          src={`/image/profile.png`}
          width={148}
          height={127}
          alt="profile"
        />
        <Divider />
        {!profileData ? (
          <>
            {contactList?.map((item, index) => (
              <ContactItem
                key={item.name}
                title={item.title}
                name={item.name}
                text={item.text}
              />
            ))}
          </>
        ) : (
          <>
            <ContactItem
              title="이름"
              name="face"
              text={profileData?.fetchProfile?.name ?? "이름 없음"}
            />
            <ContactItem
              title="나이"
              name="phone"
              text={profileData?.fetchProfile?.age ?? "나이 없음"}
            />
            <ContactItem
              title="학교"
              name="star"
              text={profileData?.fetchProfile?.school ?? "학교 없음"}
            />
          </>
        )}
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
  margin-right: 3px;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.color.gray};
  background-color: ${({ theme }) => theme.color.white};
`;

const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;

  > p {
    margin: 10px 0;
  }
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
