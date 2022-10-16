import React from "react";
import InnerBox from "../InnerBox";
import Profile from "components/organisms/Profile";
import DiaryBoardWrapper from "components/organisms/DiaryBoardWrapper";
import { DiaryDetailProps } from "types";

const DiaryDetail = ({ id }: DiaryDetailProps) => {
  return (
    <InnerBox>
      <Profile />
      <DiaryBoardWrapper id={id} />
    </InnerBox>
  );
};

export default DiaryDetail;
