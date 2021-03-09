import { NgModule } from '@angular/core';
import { NbCardModule } from '@nebular/theme';

import { ThemeModule } from '../../@theme/theme.module';
import { UsersModule } from '../../users/users.module';
import { DashboardComponent } from './dashboard.component';

@NgModule({
  imports: [
    NbCardModule,
    ThemeModule,
    UsersModule
  ],
  declarations: [
    DashboardComponent,
  ],
})
export class DashboardModule { }
