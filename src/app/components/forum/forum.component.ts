import { Component, OnInit } from '@angular/core';
import { PostServiceService } from './../../../services/post-service.service';
import { Post } from './../../Model/Post';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css'],
})
export class ForumComponent implements OnInit {
  constructor(private service: PostServiceService) {}
  com: Boolean;
  list: Post[];
  ngOnInit(): void {
    this.service.getPosts().subscribe((res) => {
      this.list = res;
    });
    this.com = true;
  }
  comment(): void {
    this.com = true;
  }
  cancel(): void {
    this.com = false;
  }
}
