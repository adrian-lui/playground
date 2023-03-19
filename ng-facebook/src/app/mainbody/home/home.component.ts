import { Component } from '@angular/core';
import { Post } from '../mainbody.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  private posts: Post[] = [];

  constructor() {}

  onSubmitNewPost(e: Event) {
    e.preventDefault();
    console.log(e);
  }
}
