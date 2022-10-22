import { DiaryType } from "types";

type DateType = `${string}-${string}-${string}`;
type DateTimeType =
  `${string}-${string}-${string} ${string}:${string}:${string}`;

const useDate = () => {
  const dateConvert = (
    dateStr: string,
    type = "DATE"
  ): DateType | DateTimeType => {
    const newDate = new Date(dateStr);
    const year = newDate.getFullYear();
    const month = String(newDate.getMonth() + 1).padStart(2, "0");
    const date = String(newDate.getDate()).padStart(2, "0");
    const hours = String(newDate.getHours()).padStart(2, "0");
    const minutes = String(newDate.getMinutes()).padStart(2, "0");
    const seconds = String(newDate.getSeconds()).padStart(2, "0");

    if (type === "DATE") {
      return `${year}-${month}-${date}`;
    } else return `${year}-${month}-${date} ${hours}:${minutes}:${seconds}`;
  };

  const newDateCount = (diaryList: any): number => {
    const today = new Date();
    const day = today.getDate();
    const yesterday = new Date(new Date().setDate(day - 1)).toISOString();
    let count = 0;

    diaryList?.forEach((date: DiaryType) => {
      yesterday < date.createdAt && count++;
    });

    return count;
  };

  const newDate = (createdAt: string): boolean => {
    const today = new Date();
    const day = today.getDate();
    const yesterday = new Date(today.setDate(day - 1)).toISOString();

    return yesterday < createdAt;
  };

  return { dateConvert, newDateCount, newDate } as const;
};

export default useDate;
