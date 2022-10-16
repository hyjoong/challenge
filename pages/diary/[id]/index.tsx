import React from "react";
import { GetServerSideProps } from "next";
import { DiaryDetailProps } from "types";
import DiaryDetail from "components/templates/DiaryDetail";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.query;
  return {
    props: { id },
  };
};

const Diary = ({ id }: DiaryDetailProps) => {
  return <DiaryDetail id={id} />;
};

export default Diary;
