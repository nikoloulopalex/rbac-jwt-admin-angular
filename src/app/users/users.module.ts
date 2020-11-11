import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { AdministratorsComponent } from './administrators/administrators.component';
import { NbButtonModule, NbCardModule } from '@nebular/theme';
import { ThemeModule } from '../@theme/theme.module';


@NgModule({
  declarations: [AdministratorsComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    NbCardModule,
    ThemeModule,
    NbButtonModule
  ]
})
export class UsersModule { }
