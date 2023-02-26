import React from "react";
import Profile from "components/organisms/Profile";
import InnerBox from "../InnerBox";
import GuestWrapper from "components/organisms/GuestWrapper";
import { PageProps } from "types";
import { GetServerSideProps } from "next";
import {
  useGetGuestsCountQuery,
  useGetGuestsQuery,
} from "lib/graphql/queries/schema";

import { GuestListProps } from "types";

const GuestContainer = ({
  initialGuestData,
  initialGuestCount,
}: GuestListProps) => {
  return (
    <InnerBox>
      <Profile />
      <GuestWrapper
        initialGuestData={initialGuestData}
        initialGuestCount={initialGuestCount}
      />
    </InnerBox>
  );
};

export const getServerSideProps: GetServerSideProps = async ({
  query,
}: PageProps) => {
  const { data: initialGuestData } = await useGetGuestsQuery({
    variables: { page: Number(query.page) },
  });

  const { data: initialGuestCount } = await useGetGuestsCountQuery();

  return { props: { initialGuestData, initialGuestCount } };
};

export default GuestContainer;
