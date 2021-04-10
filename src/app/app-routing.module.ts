import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { UsersListComponent } from './users/components/users-list/users-list.component';
import { UserDetailsComponent } from './users/components/user-details/user-details.component';
import { AddUserComponent } from './users/components/add-user/add-user.component';
const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: 'home', component: HomeComponent},
  // les routes pour l'api user
  {path: 'users', component: UsersListComponent},
  {path: 'users/:id', component: UserDetailsComponent},
  {path: 'user/add', component: AddUserComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
