import { ContactType } from "types";

export const contactList: ContactType[] = [
  { name: "face", text: "이름" },
  { name: "phone", text: "Phone" },
  { name: "mail", text: "E-mail" },
  { name: "star", text: "인스타그램" },
];

export const emotionList: string[] = ["기쁨 😍", "우울 😂", "졸림 😴"];

export const dashboardList = [
  {
    title: "다이어리",
    count: "0/65",
    isNew: false,
  },
  {
    title: "사진첩",
    count: "0/265",
    isNew: false,
  },
  {
    title: "게시판",
    count: "0/15",
    isNew: false,
  },
  {
    title: "방명록",
    count: "0/15",
    isNew: true,
  },
  {
    title: "",
    count: "",
  },
  {
    title: "",
    count: "",
  },
];

export const bgmList = [
  { song: "After LIKE", artist: "IVE (아이브)" },
  { song: "사랑스러워", artist: "김종국" },
  { song: "Attention", artist: "NewJeans" },
  { song: "Love Love Love", artist: "에픽하이" },
  { song: "Pink Venom", artist: "BLACKPINK" },
  { song: "눈의꽃", artist: "박효신" },
  { song: "Hype boy", artist: "NewJeans" },
  { song: "FOREVER 1", artist: "소녀시대" },
  { song: "그때 그 순간 그대로", artist: "WSG워너비" },
  { song: "애인있어요", artist: "이은미" },
];
