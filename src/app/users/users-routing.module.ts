import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdministratorsComponent } from './administrators/administrators.component';
import { CreateUserComponent } from './create-user/create-user.component';


const routes: Routes = [
  {
    path: '',
    component: AdministratorsComponent
  },
  {
    path: 'new-user',
    component: CreateUserComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
