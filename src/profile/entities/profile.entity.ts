import { Movies } from "src/movies/entities/movies.entity";
import { User } from "src/user/entities/user.entity";

export class Profile {
  id?: string;
  title: string;
  imageURL: string;
  user?: User;
  movies?: Movies[];
  createdAt?: Date;
  updatedAt?: Date;
}
