import React from "react";
import InnerBox from "../InnerBox";
import Profile from "components/organisms/Profile";
import DiaryList from "components/organisms/DiaryList";
import { GetServerSideProps } from "next";
import {
  useGetBoardsCountQuery,
  useGetDiarysQuery,
} from "lib/graphql/queries/schema";
import { DiaryListProps, PageProps } from "types";

const DiaryContainer = ({
  initialDiarysData,
  initialDiaryCount,
}: DiaryListProps) => {
  return (
    <InnerBox>
      <Profile />
      <DiaryList
        initialDiarysData={initialDiarysData}
        initialDiaryCount={initialDiaryCount}
      />
    </InnerBox>
  );
};

export const getServerSideProps: GetServerSideProps = async ({
  query,
}: PageProps) => {
  const { data: initialDiarysData } = await useGetDiarysQuery({
    variables: { input: Number(query.page) },
  });

  const { data: initialDiaryCount } = await useGetBoardsCountQuery();

  return { props: { initialDiarysData, initialDiaryCount } };
};

export default DiaryContainer;
