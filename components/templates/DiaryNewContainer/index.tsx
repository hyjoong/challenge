import React from "react";
import DiaryNewWrapper from "components/organisms/DiaryNewWrapper";
import Profile from "components/organisms/Profile";
import InnerBox from "../InnerBox";

const DiaryNewContainer = () => {
  return (
    <InnerBox>
      <Profile />
      <DiaryNewWrapper />
    </InnerBox>
  );
};

export default DiaryNewContainer;
