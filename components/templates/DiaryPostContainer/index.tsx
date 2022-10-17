import React from "react";
import DiaryNewWrapper from "components/organisms/DiaryNewWrapper";
import Profile from "components/organisms/Profile";
import InnerBox from "../InnerBox";
import { useCreateBoardMutation } from "lib/graphql/queries/schema";

const DiaryPostContainer = () => {
  return (
    <InnerBox>
      <Profile />
      <DiaryNewWrapper useLazyQuery={useCreateBoardMutation} />
    </InnerBox>
  );
};

export default DiaryPostContainer;
