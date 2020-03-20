import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {User} from '../interfaces/user-interface'
import {Post} from '../interfaces/post-interface'
import {Comment} from '../interfaces/comment-interface'
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  private url: string = 'https://jsonplaceholder.typicode.com/';
  userList: User[];

  constructor(private http: HttpClient) { }

  getUsersList(): Observable<User[]> {
    return this.http.get<User[]>(this.url + 'users');
  }

  setUserList(userlist: User[]) {
    this.userList = userlist;
  }

  getUserById(id: number): User {
    return this.userList.find(i => i.id == +id);
  }

  getUserPosts():Observable<Post[]> {
    return this.http.get<Post[]>(this.url + 'posts');
      }
 
 getComments():Observable<Comment[]>{
  return this.http.get<Comment[]>(this.url + 'comments');
 }
 
}
