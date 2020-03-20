import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCommentsComponent } from './user-comments.component';
import { HttpClientTestingModule,} from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';


describe('UserCommentsComponent', () => {
  let component: UserCommentsComponent;
  let fixture: ComponentFixture<UserCommentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserCommentsComponent ],
      imports: [NoopAnimationsModule, HttpClientTestingModule, RouterTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
