import { Component, Input, OnInit } from '@angular/core';
import { Post } from './../Model/Post';

@Component({
  selector: 'app-card-post',
  templateUrl: './card-post.component.html',
  styleUrls: ['./card-post.component.css'],
})
export class CardPostComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  @Input()
  post: Post;
}
