import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { Post } from '../../mainbody.model';

@Component({
  selector: 'app-new-post-form',
  templateUrl: './new-post-form.component.html',
  styleUrls: ['./new-post-form.component.css'],
})
export class NewPostFormComponent {
  @Output() emitNewPost: EventEmitter<Post> = new EventEmitter();

  constructor() {}

  onSubmitNewPost(f: NgForm) {
    console.log(f);
    const post: Post = {
      title: f.controls['title'].value,
      body: f.controls['body'].value,
    };
    this.emitNewPost.emit(post);
  }
}
