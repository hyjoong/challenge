import { NextParsedUrlQuery } from "next/dist/server/request-meta";

export interface DiaryDetailProps {
  id: string;
}

export interface ContactType {
  name: string;
  text: string;
}
export interface BgmType {
  song: string;
  artist: string;
}

export interface DashboardType {
  title: string;
  count: string;
  isNew?: boolean;
}

export interface TabType {
  title: string;
  path: string;
  value: string;
}

export interface DiaryType {
  createdAt: string;
  number?: number;
  writer?: string;
  title?: string;
  contents?: string;
  like?: string;
}
export interface PageProps {
  query: NextParsedUrlQuery;
}
