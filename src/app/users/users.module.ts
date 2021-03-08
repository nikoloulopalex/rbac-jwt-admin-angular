import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { AdministratorsComponent } from './administrators/administrators.component';
import { NbButtonModule, NbCardModule, NbCheckboxModule } from '@nebular/theme';
import { ThemeModule } from '../@theme/theme.module';
import { CreateUserComponent } from './create-user/create-user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [AdministratorsComponent, CreateUserComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    NbCardModule,
    ThemeModule,
    NbButtonModule,
    ReactiveFormsModule,
    NbCheckboxModule,
    FormsModule
  ]
})
export class UsersModule { }
