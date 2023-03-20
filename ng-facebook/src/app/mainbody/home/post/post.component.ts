import { Component, Input } from '@angular/core';
import { Post } from '../../mainbody.model';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent {
  @Input('postTitle') postTitle: string = '';
  @Input('postBody') postBody: string = '';
  constructor() {}
}
