import { Injectable } from '@angular/core';

import { Post } from './mainbody.model';

@Injectable({
  providedIn: 'root',
})
export class MainbodyService {
  private posts: Post[] = [];

  constructor() {
    // to be replaced by fetch
    this.posts = [
      {
        title: 'First post',
        body: 'First body',
      },
      {
        title: 'Second post',
        body: 'Second body',
      },
      {
        title: 'Third post',
        body: 'Third body',
      },
    ];
  }

  loadPosts() {
    return this.posts.slice();
  }

  addPost(post: Post) {
    this.posts.push(post);
    return this.posts;
  }
}
