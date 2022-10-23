import InfoWrapper from "components/organisms/InfoWrapper";
import Profile from "components/organisms/Profile";
import React from "react";
import InnerBox from "../InnerBox";

const InfoContainer = () => {
  return (
    <InnerBox>
      <Profile />
      <InfoWrapper />
    </InnerBox>
  );
};

export default InfoContainer;
