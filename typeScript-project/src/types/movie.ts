import type { Genre } from "./genre";

export type Movie = {
  id: number;
  title: string;
  genre: Genre;
  year: number;
  image: string;
  isLiked: boolean;
};
