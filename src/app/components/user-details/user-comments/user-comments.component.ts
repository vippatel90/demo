import { Component, Input } from '@angular/core';

import {Comment} from '../../../interfaces/comment-interface'

@Component({
  selector: 'app-user-comments',
  templateUrl: './user-comments.component.html'
})
export class UserCommentsComponent {
  @Input() commentList: Comment[]
}
