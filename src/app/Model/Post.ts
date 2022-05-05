import { User } from './User';

export class Post {
  idPost: number;
  contents: string;

  date: Date;
  comments: Comment[];
  user: User;
}
