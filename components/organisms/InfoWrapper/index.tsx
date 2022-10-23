import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useRouter } from "next/router";
import Button from "components/atoms/Button";
import Loading from "components/atoms/Loading";
import InfoItem from "components/molecules/infoItem";
import Contents from "../Contents";
import { defaultWritter } from "constants/index";
import {
  GetProfileQueryResult,
  GetProfileQueryVariables,
  useGetProfileQuery,
  useUpdateProfileMutation,
} from "lib/graphql/queries/schema";

const InfoWrapper = () => {
  const router = useRouter();
  const [name, setName] = useState<string>(defaultWritter);
  const [school, setSchool] = useState<string>("");
  const [age, setAge] = useState<string>("");

  const { data: profileData, loading: profileDataLoading } = useGetProfileQuery(
    {
      variables: { name: defaultWritter } as GetProfileQueryVariables,
    }
  ) as GetProfileQueryResult;

  const [updateProfile] = useUpdateProfileMutation();

  const handleSubmit = async () => {
    if (school === "" || age === "") {
      alert("입력칸을 채워주세요");
      return;
    }
    const res = await updateProfile({
      variables: {
        name,
        school,
        age: Number(age),
      },
    });
    if (!res) {
      alert("프로필 수정 실패");
      return;
    }
    const alertMessage = res?.data?.updateProfile?.message;
    alert(alertMessage);
    router.push("/info");
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { value, name } = event.target;

    if (name === "학교") {
      setSchool(value);
    } else {
      setAge(value);
    }
  };

  useEffect(() => {
    setName(profileData?.fetchProfile?.name!);
    setSchool(profileData?.fetchProfile?.school!);
    setAge(String(profileData?.fetchProfile?.age));
  }, [profileData]);

  return (
    <Contents>
      {profileDataLoading ? (
        <Loading />
      ) : (
        <>
          <InfoItem
            name="이름"
            value={name}
            placeholder="이름을 입력해 주세요"
            onChange={handleChange}
            readOnly
          />
          <InfoItem
            name="나이"
            value={age}
            type="number"
            placeholder="나이를 입력해 주세요"
            onChange={handleChange}
          />
          <InfoItem
            name="학교"
            value={school}
            placeholder="학교를 입력해 주세요"
            onChange={handleChange}
          />
          <ButtonBox>
            <Button onClick={handleSubmit}>저장</Button>
          </ButtonBox>
        </>
      )}
    </Contents>
  );
};

const ButtonBox = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 200px;
`;

export default InfoWrapper;
