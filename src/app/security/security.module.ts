import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from "@angular/router";
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { AuthenticationComponent } from './authentication/authentication.component';
import { NbAuthModule } from '@nebular/auth';
import { NbAlertModule, NbButtonModule, NbInputModule, NbCheckboxModule } from '@nebular/theme';
import { AuthService } from './auth.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    // NgbModule,
    RouterModule,
    NbCheckboxModule,
    NbAuthModule,
    NbAlertModule,
    NbButtonModule,
    NbInputModule
  ],
  declarations: [
    AuthenticationComponent
  ],
  providers: [AuthService]
})
export class SecurityModule { }
