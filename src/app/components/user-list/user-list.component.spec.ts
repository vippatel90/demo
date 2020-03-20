import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { UserListComponent } from './user-list.component';
import { UserServiceService } from '../../services/user-service.service';
import { Post } from '../../interfaces/post-interface';
import { User } from '../../interfaces/user-interface';
import { of } from 'rxjs';
import { RouterTestingModule } from '@angular/router/testing';
import { SharedModule } from 'src/app/common/shared.module';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('UserListComponent', () => {
  let component: UserListComponent;
  let fixture: ComponentFixture<UserListComponent>;
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

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserListComponent ],
      imports: [SharedModule, RouterTestingModule, HttpClientTestingModule, NoopAnimationsModule],
      providers: [UserServiceService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserListComponent);
    component = fixture.componentInstance;
    service = fixture.debugElement.injector.get(UserServiceService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should called service's getUsersList method`, () => {
    const spy = spyOn(service, 'getUsersList').and.returnValue(of(mockUsersList));
    component.ngAfterViewInit();
    service.getUsersList().subscribe(data => {
      expect(data).toBe(mockUsersList);
      expect(spy).toHaveBeenCalled();
    })
  });

});
