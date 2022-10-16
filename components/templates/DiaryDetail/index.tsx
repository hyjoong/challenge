import React from "react";
import InnerBox from "../InnerBox";
import Profile from "components/organisms/Profile";
import DiaryBoard from "components/organisms/DiaryBoard";

const DiaryDetail = () => {
  return (
    <InnerBox>
      <Profile />
      <DiaryBoard />
    </InnerBox>
  );
};

export default DiaryDetail;
