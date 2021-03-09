import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { NbButtonModule, NbCardModule, NbCheckboxModule, NbIconModule, NbProgressBarModule, NbSpinnerModule } from '@nebular/theme';
import { ThemeModule } from '../@theme/theme.module';
import { CreateUserComponent } from './create-user/create-user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TestRolesComponent } from './test-roles/test-roles.component';
import { AllUsersComponent } from './all-users/all-users.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [CreateUserComponent, TestRolesComponent, AllUsersComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    NbCardModule,
    ThemeModule,
    NbButtonModule,
    ReactiveFormsModule,
    NbCheckboxModule,
    FormsModule,
    NbProgressBarModule,
    NbSpinnerModule,
    NbIconModule,
    SharedModule
  ],
  exports: [TestRolesComponent, AllUsersComponent]
})
export class UsersModule { }
