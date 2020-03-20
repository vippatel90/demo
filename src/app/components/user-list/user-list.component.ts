import { Component, AfterViewInit, ChangeDetectorRef, Output, EventEmitter } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

import { User } from '../../interfaces/user-interface';
import { UserServiceService } from '../../services/user-service.service';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements AfterViewInit {

  @Output() userInfo: EventEmitter<number> = new EventEmitter();

  userList: User[];
  showloader: boolean;

  constructor(private userService: UserServiceService, public cdref:ChangeDetectorRef) { }

  ngAfterViewInit() {
    this.showloader = true;
    this.cdref.detectChanges();
    this.getListofUsers();
  }

  getListofUsers() {
    this.userService.getUsersList().subscribe((resp: User[]) => {
      this.userList = resp;
      this.showloader = false;
      this.userService.setUserList(this.userList);
    }, (err: HttpErrorResponse) => {
      this.showloader = false;
    });
  }

  onSelectingUser(user: User) {
    this.userInfo.emit(user.id);
  }

}
