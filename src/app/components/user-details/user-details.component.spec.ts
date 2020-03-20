import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { UserDetailsComponent } from './user-details.component';
import { SharedModule } from 'src/app/common/shared.module';
import { RouterTestingModule } from '@angular/router/testing';
import { UserServiceService } from '../../services/user-service.service';
import { Post } from '../../interfaces/post-interface';
import { User } from '../../interfaces/user-interface';
import { of } from 'rxjs';
import { HttpClientTestingModule,} from '@angular/common/http/testing';

describe('UserDetailsComponent', () => {
  let component: UserDetailsComponent;
  let fixture: ComponentFixture<UserDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserDetailsComponent ],
      imports: [NoopAnimationsModule, HttpClientTestingModule, RouterTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});