import React from "react";
import InnerBox from "../InnerBox";
import Profile from "components/organisms/Profile";
import DiaryBoardContainer from "components/organisms/DiaryBoardContainer";
import { DiaryDetailProps } from "types";

const DiaryDetail = ({ id }: DiaryDetailProps) => {
  return (
    <InnerBox>
      <Profile />
      <DiaryBoardContainer id={id} />
    </InnerBox>
  );
};

export default DiaryDetail;
