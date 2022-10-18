import React from "react";
import DiaryNewWrapper from "components/organisms/DiaryNewWrapper";
import Profile from "components/organisms/Profile";
import InnerBox from "../InnerBox";
import { useUpdateBoardMutation } from "lib/graphql/queries/schema";
import { DiaryDetailProps } from "types";

const DiaryEditContainer = ({ id }: DiaryDetailProps) => {
  return (
    <InnerBox>
      <Profile />
      <DiaryNewWrapper useLazyQuery={useUpdateBoardMutation} id={id} />
    </InnerBox>
  );
};

export default DiaryEditContainer;
