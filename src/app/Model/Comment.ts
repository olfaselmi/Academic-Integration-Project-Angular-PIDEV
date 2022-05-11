import { Post } from './Post';
import { User } from './User';

export class Comment {
  IdCom: number;
  contents: string;
  post: Post;
  user: User;
}
