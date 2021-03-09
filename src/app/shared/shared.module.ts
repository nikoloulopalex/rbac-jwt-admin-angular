import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SafeUrlPipe } from './pipes/safe-url-pipe';
import { RolesToBadgeComponent } from './components/roles-to-badge/roles-to-badge.component';
import { NbBadgeModule } from '@nebular/theme';



@NgModule({
  declarations: [SafeUrlPipe, RolesToBadgeComponent],
  imports: [
    CommonModule
  ],
  exports: [
    SafeUrlPipe,
    RolesToBadgeComponent,
    NbBadgeModule
  ]
})
export class SharedModule { }
