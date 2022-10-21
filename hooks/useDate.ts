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

  const newDateCount = (diaryList: any): number => {
    const today = new Date();
    const hour = today.getHours();
    const yesterday = new Date(new Date().setHours(hour - 12)).toISOString();
    let count = 0;

    diaryList?.forEach((date: DiaryType) => {
      yesterday < date.createdAt && count++;
    });

    return count;
  };

  return { dateConvert, newDateCount } as const;
};

export default useDate;
