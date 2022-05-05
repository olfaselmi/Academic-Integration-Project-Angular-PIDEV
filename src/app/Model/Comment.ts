import { Post } from './Post';
import { User } from './User';

export class Comment {
  IdCom: number;
  Contents: string;
  post: Post;
  user: User;
}
