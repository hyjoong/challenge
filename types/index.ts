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
