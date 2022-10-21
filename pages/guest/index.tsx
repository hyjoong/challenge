import React from "react";
import GuestContainer from "components/templates/GuestContainer";
import { GetServerSideProps } from "next";
import { PageProps } from "types";

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  return { props: { query } };
};
const Guest = ({ query }: PageProps) => {
  return <GuestContainer query={query} />;
};

export default Guest;
