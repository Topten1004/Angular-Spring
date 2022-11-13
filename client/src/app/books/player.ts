export type PlayerId = 'id';

export interface Player {
  id: number;
  author: string;
  description: string;
  favorite: boolean;
  posterImgPath: string;
  title: string;
}
