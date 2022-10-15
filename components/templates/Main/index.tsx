import Contents from "components/organisms/Contents";
import Profile from "components/organisms/Profile";
import React from "react";
import InnerBox from "../InnerBox";

const Main = () => {
  return (
    <InnerBox>
      <Profile />
      <Contents />
    </InnerBox>
  );
};

export default Main;
