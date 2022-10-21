import React from "react";
import InnerBox from "../InnerBox";
import Profile from "components/organisms/Profile";
import DiaryList from "components/organisms/DiaryList";
import { PageProps } from "types";

const DiaryContainer = ({ query }: PageProps) => {
  return (
    <InnerBox>
      <Profile />
      <DiaryList query={query} />
    </InnerBox>
  );
};

export default DiaryContainer;
