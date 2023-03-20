import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MainbodyComponent } from './mainbody/mainbody.component';
import { LogoComponent } from './header/logo/logo.component';
import { SearchBarComponent } from './header/search-bar/search-bar.component';
import { NavLinksComponent } from './header/nav-links/nav-links.component';
import { HomeComponent } from './mainbody/home/home.component';
import { GroupsComponent } from './mainbody/groups/groups.component';
import { ProfileComponent } from './mainbody/profile/profile.component';
import { NotificationsComponent } from './mainbody/notifications/notifications.component';
import { MessagesComponent } from './mainbody/messages/messages.component';
import { LogoutComponent } from './mainbody/logout/logout.component';
import { LoginComponent } from './mainbody/login/login.component';
import { PostComponent } from './mainbody/home/post/post.component';
import { NewPostFormComponent } from './mainbody/home/new-post-form/new-post-form.component';
import { ErrorComponent } from './mainbody/error/error.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    MainbodyComponent,
    LogoComponent,
    SearchBarComponent,
    NavLinksComponent,
    HomeComponent,
    GroupsComponent,
    ProfileComponent,
    NotificationsComponent,
    MessagesComponent,
    LogoutComponent,
    LoginComponent,
    PostComponent,
    NewPostFormComponent,
    ErrorComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
