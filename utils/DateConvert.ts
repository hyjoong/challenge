type DateType = `${string}-${string}-${string}`;

export const DateConvert = (dateStr: string): DateType => {
  const newDate = new Date(dateStr);
  const year = newDate.getFullYear();
  const month = String(newDate.getMonth() + 1).padStart(2, "0");
  const date = String(newDate.getDate()).padStart(2, "0");

  return `${year}-${month}-${date}`;
};
