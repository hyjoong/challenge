import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {
  GetGuestsQueryResult,
  GetGuestsQueryVariables,
  useCreateGuestMutation,
  useDeleteGuestMutation,
  useGetGuestsCountQuery,
  useGetGuestsQuery,
} from "lib/graphql/queries/schema";
import { useRouter } from "next/router";
import Title from "components/atoms/Title";
import Loading from "components/atoms/Loading";
import GuestItem from "components/molecules/GuestItem";
import GuestPost from "components/molecules/GuestPost";
import Pagination from "components/molecules/Pagination";
import { defaultWritter } from "constants/index";
import Contents from "../Contents";
import usePagination from "hooks/usePagination";
import { PageProps } from "types";

const GuestWrapper = ({ query }: PageProps) => {
  const router = useRouter();
  const [name, setName] = useState("");
  const [detail, setDetail] = useState("");
  const [createGuest] = useCreateGuestMutation();

  const {
    data,
    loading: guestsDataLoading,
    refetch: refetchGuestsData,
  } = useGetGuestsQuery({
    variables: { page: Number(query.page) } as GetGuestsQueryVariables,
  }) as GetGuestsQueryResult;

  const { data: guestsCount, refetch: refetchGuestsCount } =
    useGetGuestsCountQuery();

  const [deleteGuest] = useDeleteGuestMutation();

  const [page, isEndPage, handlePrevPage, handleNextPage] = usePagination(
    Number(query.page),
    guestsCount?.fetchProductsCount ?? 0
  );

  const handleDeleteGuest = async (id: string) => {
    if (window.confirm("방명록을 삭제하시겠습니까?")) {
      const res = await deleteGuest({
        variables: { productId: id },
      });

      const { data } = res;

      if (!data) {
        alert("방명록 삭제에 실패하였습니다.");
        return;
      }

      alert("방명록 삭제에 성공하였습니다.");
      router.push(`/guest?page=${query.page}`);
      return;
    }
  };

  const handleCreateGuest = async () => {
    const res = await createGuest({
      variables: {
        seller: defaultWritter,
        createProductInput: { name, detail },
      },
    });

    const { data } = res;

    if (!data) {
      alert("방명록 작성에 실패하였습니다");
      return;
    }

    alert("방명록 등록에 성공하였습니다");
    setName("");
    setDetail("");
    router.push(`/guest?page=1`);
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { value, name } = event.target;
    if (name === "name") {
      setName(value);
    } else {
      setDetail(value);
    }
  };

  const isEmptyName = (name: string) => {
    return name === "" ? "익명" : name;
  };

  useEffect(() => {
    refetchGuestsData();
    refetchGuestsCount();
  }, [page, router]);

  return (
    <Contents>
      <Title>Guest</Title>
      <GuestItemList>
        {guestsDataLoading ? (
          <Loading />
        ) : (
          <>
            <GuestPost
              name={name}
              detail={detail}
              handleChange={handleChange}
              onClick={handleCreateGuest}
            />
            {data.fetchProducts.map((item) => (
              <GuestItem
                key={item._id}
                id={item._id}
                createdAt={item.createdAt}
                name={isEmptyName(item.name) ?? "이름없음"}
                detail={item.detail ?? "내용없음"}
                onClick={handleDeleteGuest}
              />
            ))}
          </>
        )}
      </GuestItemList>
      <Pagination
        page={Number(query.page)}
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
