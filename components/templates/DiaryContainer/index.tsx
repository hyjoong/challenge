import React from "react";
import InnerBox from "../InnerBox";
import Profile from "components/organisms/Profile";
import DirayList from "components/organisms/DiaryList";

const DiaryContainer = () => {
  return (
    <InnerBox>
      <Profile />
      <DirayList />
    </InnerBox>
  );
};

export default DiaryContainer;
