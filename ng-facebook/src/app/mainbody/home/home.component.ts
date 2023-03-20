import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../mainbody.model';
import { MainbodyService } from '../mainbody.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  // @Input('emitNewPost') newPost: Post;

  // public newPost: Post;
  public posts: Post[] = [];

  constructor(private mainService: MainbodyService) {
    // this.newPost = { title: '', body: '' };
  }

  ngOnInit(): void {
    this.posts = this.mainService.loadPosts();
  }

  onReceiveNewPost(post: Post) {
    console.log(post);
    this.posts = this.mainService.addPost(post);
  }
}
