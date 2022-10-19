import React from "react";
import { DiaryType } from "types";

type DateType = `${string}-${string}-${string}`;

const useDate = () => {
  const dateConvert = (dateStr: string): DateType => {
    const newDate = new Date(dateStr);
    const year = newDate.getFullYear();
    const month = String(newDate.getMonth() + 1).padStart(2, "0");
    const date = String(newDate.getDate()).padStart(2, "0");

    return `${year}-${month}-${date}`;
  };

  const newDateCount = (diaryList: DiaryType[]): number => {
    const today = new Date();
    const day = today.getDate();
    const yesterday = new Date(new Date().setDate(day - 1)).toISOString();

    let count = 0;
    diaryList.forEach((date) => {
      yesterday < date.createdAt && count++;
    });

    return count;
  };

  return { dateConvert, newDateCount } as const;
};

export default useDate;
