import React from "react";
import { GetServerSideProps } from "next";
import { DiaryDetailProps } from "types";
import DiaryEditContainer from "components/templates/DiaryEditContainer";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.query;
  return {
    props: { id },
  };
};

const Edit = ({ id }: DiaryDetailProps) => {
  return <DiaryEditContainer id={id} />;
};

export default Edit;
