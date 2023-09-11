import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Comment } from 'src/app/core/models/comment.model';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent {
  @Input() comments!: Comment[];
  @Output() newComment = new EventEmitter<string>();

  commentCtrl!: FormControl;

  constructor(private formBuider: FormBuilder) { }

  ngOnInit(): void {
    this.commentCtrl = this.formBuider.control('', [Validators.required, Validators.minLength(10)]);
  }

  onLeaveComment() {
    if (this.commentCtrl.invalid) {
        return;
    }
    this.newComment.emit(this.commentCtrl.value);
    this.commentCtrl.reset();
}
}
