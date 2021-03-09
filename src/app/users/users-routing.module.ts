import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllUsersComponent } from './all-users/all-users.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { TestRolesComponent } from './test-roles/test-roles.component';


const routes: Routes = [
  {
    path: '',
    component: AllUsersComponent
  },
  {
    path: 'new-user',
    component: CreateUserComponent
  },
  {
    path: 'test-roles',
    component: TestRolesComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
