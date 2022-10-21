import React from "react";
import Profile from "components/organisms/Profile";
import InnerBox from "../InnerBox";
import GuestWrapper from "components/organisms/GuestWrapper";
import { PageProps } from "types";

const GuestContainer = ({ query }: PageProps) => {
  return (
    <InnerBox>
      <Profile />
      <GuestWrapper query={query} />
    </InnerBox>
  );
};

export default GuestContainer;
