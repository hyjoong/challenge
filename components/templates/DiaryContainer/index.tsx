import DirayList from "components/organisms/DiaryList";
import Profile from "components/organisms/Profile";
import React from "react";
import InnerBox from "../InnerBox";

const DiaryContainer = () => {
  return (
    <InnerBox>
      <Profile />
      <DirayList />
    </InnerBox>
  );
};

export default DiaryContainer;
