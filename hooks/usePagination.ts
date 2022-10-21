import { useState } from "react";
import { useRouter } from "next/router";
import { defaultSize } from "constants/index";

const usePagination = (beforePage: number, totalCount: number) => {
  const router = useRouter();

  const [page, setPage] = useState<number>(1);

  const isEndPage: boolean =
    totalCount - ((beforePage - 1) * defaultSize + defaultSize) <= 0;

  const handlePrevPage = (): void => {
    if (beforePage === 1) {
      return;
    }
    setPage(beforePage - 1);
    router.push(`${router.pathname}?page=${beforePage - 1}`);
  };

  const handleNextPage = (): void => {
    setPage(beforePage + 1);
    router.push(`${router.pathname}?page=${beforePage + 1}`);
  };

  return [page, isEndPage, handlePrevPage, handleNextPage] as const;
};

export default usePagination;
