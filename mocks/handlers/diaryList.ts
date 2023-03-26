import { rest } from "msw";

const DIARY_LIST = [
  {
    createdAt: "2023-03-26T09:55:26.647Z",
    number: 1,
    title: "제목1",
  },
  {
    createdAt: "2023-03-26T12:55:26.647Z",
    number: 2,
    title: "제목2",
  },
  {
    createdAt: "2023-03-26T15:55:26.647Z",
    number: 3,
    title: "제목3",
  },
  {
    createdAt: "2023-03-26T18:55:26.647Z",
    number: 4,
    title: "제목4",
  },
];

export const getDiaryList = rest.get("/api/diaryList", (req, res, ctx) =>
  res(ctx.status(200), ctx.json(DIARY_LIST))
);
