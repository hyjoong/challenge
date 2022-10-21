import Title from "components/atoms/Title";
import GuestItem from "components/molecules/GuestItem";
import GuestPost from "components/molecules/GuestPost";
import Pagination from "components/molecules/Pagination";
import { defaultWritter } from "constants/index";
import {
  GetGuestsQueryResult,
  GetGuestsQueryVariables,
  useCreateGuestMutation,
  useDeleteGuestMutation,
  useGetGuestsCountQuery,
  useGetGuestsQuery,
} from "lib/graphql/queries/schema";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Contents from "../Contents";

const GuestWrapper = () => {
  const SIZE = 10;
  const [page, setPage] = useState<number>(1);
  const router = useRouter();
  const [detail, setDetail] = useState<string>("");
  const [createGuest] = useCreateGuestMutation();

  const { data, refetch: refetchGuestsData } = useGetGuestsQuery({
    variables: { page } as GetGuestsQueryVariables,
  }) as GetGuestsQueryResult;

  const { data: guestsCount, refetch: refetchGuestsCount } =
    useGetGuestsCountQuery();

  const [deleteGuest] = useDeleteGuestMutation();

  const isEndPage =
    (guestsCount?.fetchProductsCount as number) - ((page - 1) * SIZE + SIZE) <=
    0;

  const handlePrevPage = () => {
    if (page === 1) {
      return;
    }
    setPage((prev) => prev - 1);
  };

  const handleNextPage = (): void => {
    setPage((prev) => prev + 1);
  };

  const handleDeleteGuest = async (id: string) => {
    const res = await deleteGuest({
      variables: { productId: id },
    });

    const { data } = res;
    if (!data) {
      alert("방명록 삭제에 실패하였습니다.");
      return;
    }
    alert(data.deleteProduct?.message);
    router.push("/guest");
    return;
  };

  const handleCreateGuest = async () => {
    const res = await createGuest({
      variables: {
        seller: defaultWritter,
        createProductInput: { name: defaultWritter, detail },
      },
    });

    const { data } = res;

    if (!data) {
      alert("방명록 작성에 실패하였습니다");
      return;
    }

    alert("방명록 등록에 성공하였습니다");
    setDetail("");
    router.push("/guest");
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { value } = event.target;
    setDetail(value);
  };

  useEffect(() => {
    refetchGuestsData();
    refetchGuestsCount();
  }, [page, router]);

  return (
    <Contents>
      <Title>Guest</Title>
      <GuestItemList>
        <GuestPost
          detail={detail}
          handleChange={handleChange}
          onClick={handleCreateGuest}
        />
        {data?.fetchProducts?.map((item, index) => (
          <GuestItem
            key={index}
            id={item._id!}
            name={item.name ?? "익명"}
            detail={item.detail ?? "내용없음"}
            onClick={handleDeleteGuest}
          />
        ))}
      </GuestItemList>
      <Pagination
        page={page}
        isEndPage={isEndPage}
        handlePrevPage={handlePrevPage}
        handleNextPage={handleNextPage}
      />
    </Contents>
  );
};

const GuestItemList = styled.div`
  height: 320px;
  overflow-y: auto;
  margin-top: 15px;

  > div {
    margin-bottom: 10px;
  }

  ::-webkit-scrollbar {
    width: 5px;
    background-color: #e9e9e9;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #c5c2c2;
  }
`;

export default GuestWrapper;