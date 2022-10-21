import React from "react";
import Profile from "components/organisms/Profile";
import InnerBox from "../InnerBox";
import GuestWrapper from "components/organisms/GuestWrapper";

const GuestContainer = () => {
  return (
    <InnerBox>
      <Profile />
      <GuestWrapper />
    </InnerBox>
  );
};

export default GuestContainer;
