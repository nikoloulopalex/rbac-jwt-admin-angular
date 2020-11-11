import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SafeUrlPipe } from './pipes/safe-url-pipe';



@NgModule({
  declarations: [SafeUrlPipe],
  imports: [
    CommonModule
  ],
  exports: [
    SafeUrlPipe
  ]
})
export class SharedModule { }
