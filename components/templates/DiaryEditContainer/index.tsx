import React, { useEffect } from "react";
import { useRouter } from "next/router";
import {
  GetEditBoardQueryResult,
  GetEditBoardQueryVariables,
  useGetEditBoardQuery,
  useUpdateBoardMutation,
} from "lib/graphql/queries/schema";
import DiaryNewWrapper from "components/organisms/DiaryNewWrapper";
import Profile from "components/organisms/Profile";
import InnerBox from "../InnerBox";

import { DiaryDetailProps } from "types";

const DiaryEditContainer = ({ id }: DiaryDetailProps) => {
  const router = useRouter();
  const { data: editBoardData, refetch } = useGetEditBoardQuery({
    variables: { number: Number(id) } as GetEditBoardQueryVariables,
  }) as GetEditBoardQueryResult;

  const editTitle = editBoardData?.fetchBoard?.title;
  const editContents = editBoardData?.fetchBoard?.contents;

  useEffect(() => {
    refetch();
  }, [router]);

  return (
    <InnerBox>
      <Profile />
      <DiaryNewWrapper
        useLazyQuery={useUpdateBoardMutation}
        id={id}
        editTitle={editTitle ?? "-"}
        editContents={editContents ?? "-"}
      />
    </InnerBox>
  );
};

export default DiaryEditContainer;
