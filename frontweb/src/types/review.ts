import { User } from "./user";

export type Review = {
  id: string;
  text: string;
  movieId: string;
  user: User;
};
