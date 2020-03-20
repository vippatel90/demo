import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserCommentsComponent } from './components/user-details/user-comments/user-comments.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { LoaderModule } from './common/loader/loader.module';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserCommentsComponent,
    UserDetailsComponent,
  ],
  imports: [
    LoaderModule,
    BrowserModule,
    HttpClientModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
