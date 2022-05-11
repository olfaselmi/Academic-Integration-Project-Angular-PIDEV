import { Component, Input, OnInit } from '@angular/core';
import { LikeService } from './../like.service';
import { CommentService } from './../comment.service';
import { Comment } from './../Model/Comment';
import { NotificationService } from './../notification.service';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css'],
})
export class LikeComponent implements OnInit {
  constructor(
    private service: LikeService,
    private cs: CommentService,
    private not: NotificationService
  ) {}
  @Input()
  id: number;
  nb: number;
  com: Boolean;
  nbc: number;
  status: number;
  comments: Comment[];
  contents: string;
  comment(): void {
    this.com = true;
  }
  cancel(): void {
    this.com = false;
  }
  ngOnInit(): void {
    this.com = false;
    this.service.getNBLike(this.id).subscribe((res) => (this.nb = res));
    this.service.getLike(1, this.id).subscribe((res) => (this.status = res));
    this.cs.getNB(this.id).subscribe((res) => (this.nbc = res));
    this.cs.getByPost(this.id).subscribe((res) => (this.comments = res));
    this.contents = '';
  }
  get(): void {
    this.cs.getByPost(this.id).subscribe((res) => (this.comments = res));
  }
  makeLike(): void {
    this.service.makeLike(1, this.id).subscribe(() => (this.status = 1));
    this.nb++;
  }
  removeLike(): void {
    this.service.removreLike(1, this.id).subscribe(() => (this.status = 0));
    this.nb--;
  }
  add(): void {
    this.cs.addComment(this.contents, 1, this.id).subscribe((c) => {
      if (c != null) {
        this.cs.getByPost(this.id).subscribe((res) => (this.comments = res));
        this.nbc++;
        this.com = false;
        this.not.succes('top', 'right', 'comment add sucssefully');
      } else this.not.error('top', 'right', '!!! bad word change your comment');
    });
  }
}
