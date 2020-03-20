import { TestBed } from '@angular/core/testing';

import { UserServiceService } from './user-service.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { User } from '../interfaces/user-interface';
import { Post } from '../interfaces/post-interface';
import { Comment } from '../interfaces/comment-interface';
import { of } from 'rxjs';

describe('UserServiceService', () => {
  let service: UserServiceService;
  let mockUsersList: User[] = [
    {
      "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz"
    },
    {
      "id": 2,
    "name": "Ervin Howell",
    "username": "Antonette",
    "email": "Shanna@melissa.tv"
    },
    {
      "id": 3,
    "name": "Clementine Bauch",
    "username": "Samantha",
    "email": "Nathan@yesenia.net"
    }
  ]
  let mockPostsList: Post[] = [
    {
      "userId": 1,
      "id": 1,
      "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    },
    {
      "userId": 1,
      "id": 2,
      "title": "qui est esse",
      "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
    },
    {
      "userId": 1,
      "id": 3,
      "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
      "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
    }
  ]
  let mockCommentsList: Comment[] = [
    {
      "postId": 1,
      "id": 1,
      "name": "id labore ex et quam laborum",
      "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
    },
    {
      "postId": 1,
      "id": 2,
      "name": "quo vero reiciendis velit similique earum",
      "body": "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et"
    },
    {
      "postId": 1,
      "id": 3,
      "name": "odio adipisci rerum aut animi",
      "body": "quia molestiae reprehenderit quasi aspernatur\naut expedita occaecati aliquam eveniet laudantium\nomnis quibusdam delectus saepe quia accusamus maiores nam est\ncum et ducimus et vero voluptates excepturi deleniti ratione"
    }
  ]

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UserServiceService]
    });
    service = TestBed.inject(UserServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should have instance of service', () =>{
    expect(service).toBeDefined();
  });
  it('should return mockUserList', () => {
    const spy = spyOn(service, 'getUsersList').and.returnValue(of(mockUsersList));
    service.getUsersList().subscribe(data => {
      expect(data).toBe(mockUsersList);
      expect(spy).toHaveBeenCalled();
    })
  });
  it('should return mockPostsList', () => {
    const spy = spyOn(service, 'getUserPosts').and.returnValue(of(mockPostsList));
    service.getUserPosts().subscribe(data => {
      expect(data).toBe(mockPostsList);
      expect(spy).toHaveBeenCalled();
    })
  });
  it('should return mockCommentsList', () => {
    const spy = spyOn(service, 'getComments').and.returnValue(of(mockCommentsList));
    service.getComments().subscribe(data => {
      expect(data).toBe(mockCommentsList);
      expect(spy).toHaveBeenCalled();
    })
  });
});
