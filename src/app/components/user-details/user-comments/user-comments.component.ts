import { Component, OnInit, Input } from '@angular/core';
import {Comment} from '../../../interfaces/comment-interface'

@Component({
  selector: 'app-user-comments',
  templateUrl: './user-comments.component.html',
  styleUrls: ['./user-comments.component.scss']
})
export class UserCommentsComponent implements OnInit {
  @Input() commentList:Comment[]


  constructor() { }

  ngOnInit(): void {
  }

}
