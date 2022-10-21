import React from "react";
import { GetServerSideProps } from "next";
import DiaryContainer from "components/templates/DiaryContainer";
import { PageProps } from "types";

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  return { props: { query } };
};

const Diary = ({ query }: PageProps) => {
  return <DiaryContainer query={query} />;
};

export default Diary;
