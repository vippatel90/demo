import { Component, OnChanges, ChangeDetectorRef, Input, SimpleChanges } from '@angular/core';
import { User } from '../../interfaces/user-interface';
import { Post } from '../../interfaces/post-interface';
import { Comment } from '../../interfaces/comment-interface';
import { UserServiceService } from '../../services/user-service.service';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnChanges {

  @Input()
  userId: number;

  postList: Post[];
  commentList: Comment[];
  user: User;
  load = false;
  showloader: boolean;

  constructor(private userService: UserServiceService,  public cdref: ChangeDetectorRef) { }

  getUserPosts(){
    this.user = this.userService.getUserById(this.userId)
    this.userService.getUserPosts().subscribe(
      (resp: Post[]) => {
        this.load = false;
        this.postList = resp;
        this.showloader = false;
        this.postList = this.postList.filter(post => (post.userId == this.userId));
      },
      (err: HttpErrorResponse) => {
        console.log(err.message);
      }
    );
  }
  onLoadAll() {
    this.load = true;
  }

  onClickingPost(postId: number, i: number) {

    if (document.getElementById('collapsePost' + i).className === 'collapse mb-2') {
      this.userService.getComments().subscribe(
        (resp: Comment[]) => {
          this.commentList = resp;
          this.commentList = this.commentList.filter(comment => (comment.postId == postId));
          console.log(this.commentList)
        },
        (err: HttpErrorResponse) => {
          console.log(err.message);
        }
      )
      document.getElementById('collapsePost' + i).className = 'mb-2 collapse show'
    } else {
      document.getElementById('collapsePost' + i).className = 'collapse mb-2'
    }

  }

  ngOnChanges(changes: SimpleChanges): void {
   if (changes.userId.currentValue !== changes.userId.previousValue) {
     this.userId = changes.userId.currentValue;
     this.showloader = true;
     this.getUserPosts();
   }
  }


}
