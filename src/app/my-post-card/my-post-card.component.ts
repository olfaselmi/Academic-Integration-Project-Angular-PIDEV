import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../Model/Post';
import { PostServiceService } from './../../services/post-service.service';
import { NotificationService } from './../notification.service';

@Component({
  selector: 'app-my-post-card',
  templateUrl: './my-post-card.component.html',
  styleUrls: ['./my-post-card.component.css'],
})
export class MyPostCardComponent implements OnInit {
  constructor(
    private service: PostServiceService,
    private notif: NotificationService
  ) {}
  contents: string;
  edit: Boolean;
  show: boolean;
  @Input()
  post: Post;
  ngOnInit(): void {
    this.edit = false;
    this.contents = this.post.contents;
    this.show = true;
  }

  editPost(): void {
    this.edit = !this.edit;
  }
  update(): void {
    this.service
      .updatePost({ ...this.post, contents: this.contents })
      .subscribe(() => {});
    this.notif.warning('top', 'right', 'post update successfully');
  }
  delete(): void {
    this.service.deletePost(this.post.idPost).subscribe(() => {
      this.show = false;
      this.notif.error('top', 'right', 'post delete successfully');
    });
  }
}
