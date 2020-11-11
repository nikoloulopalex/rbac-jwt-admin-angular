import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FilesRoutingModule } from './files-routing.module';
import { FilesComponent } from './files/files.component';
import { NbButtonModule, NbCardModule } from '@nebular/theme';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [FilesComponent],
  imports: [
    CommonModule,
    FilesRoutingModule,
    NbCardModule,
    NbButtonModule,
    SharedModule
  ]
})
export class FilesModule { }
