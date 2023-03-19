import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './mainbody/error/error.component';
import { GroupsComponent } from './mainbody/groups/groups.component';
import { HomeComponent } from './mainbody/home/home.component';
import { LoginComponent } from './mainbody/login/login.component';
import { LogoutComponent } from './mainbody/logout/logout.component';
import { MessagesComponent } from './mainbody/messages/messages.component';
import { NotificationsComponent } from './mainbody/notifications/notifications.component';
import { ProfileComponent } from './mainbody/profile/profile.component';

const routes: Routes = [
  { path: 'groups', component: GroupsComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'messages', component: MessagesComponent },
  { path: 'notifications', component: NotificationsComponent },
  { path: 'profile', component: ProfileComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
