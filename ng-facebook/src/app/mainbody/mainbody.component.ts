import { Component, OnInit } from '@angular/core';
import { Post } from './mainbody.model';
import { MainbodyService } from './mainbody.service';

@Component({
  selector: 'app-mainbody',
  templateUrl: './mainbody.component.html',
  styleUrls: ['./mainbody.component.css'],
  providers: [MainbodyService],
})
export class MainbodyComponent implements OnInit {
  private posts: Post[] = [];

  constructor(private mainService: MainbodyService) {}

  ngOnInit(): void {
    this.posts = this.mainService.loadPosts();
    console.log(this.posts);
  }
}
