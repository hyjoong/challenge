import React from "react";
import Profile from "components/organisms/Profile";
import MainBoard from "components/organisms/MainBoard";
import InnerBox from "../InnerBox";

const Main = () => {
  return (
    <InnerBox>
      <Profile />
      <MainBoard />
    </InnerBox>
  );
};

export default Main;
