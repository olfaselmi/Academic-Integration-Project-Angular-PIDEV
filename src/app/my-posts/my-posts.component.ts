import { Component, OnInit } from '@angular/core';
import { PostServiceService } from 'src/services/post-service.service';
import { Post } from '../Model/Post';
import { NotificationService } from './../notification.service';

@Component({
  selector: 'app-my-posts',
  templateUrl: './my-posts.component.html',
  styleUrls: ['./my-posts.component.css'],
})
export class MyPostsComponent implements OnInit {
  constructor(
    private service: PostServiceService,
    private not: NotificationService
  ) {}
  contents: String;
  list: Post[];
  com: Boolean;
  ngOnInit(): void {
    this.service.getMyPosts(1).subscribe((res) => {
      this.list = res;
    });
    this.com = false;
  }
  get(): void {
    this.service.getPosts().subscribe((res) => {
      this.list = res;
    });
  }
  show(): void {
    this.com = true;
  }
  cancel(): void {
    this.com = false;
  }
  add(): void {
    this.service.addPost(1, this.contents).subscribe(() => {
      this.get();
      this.com = false;
    });
    this.not.succes('top', 'right', 'comment add sucssefully');
  }
}
