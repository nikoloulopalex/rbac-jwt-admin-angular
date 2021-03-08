import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss']
})
export class AuthenticationComponent implements OnInit {
  destroy: Subject<boolean> = new Subject<boolean>();

  email;
  password;
  isPassword;


  constructor(private router: Router, private authService: AuthService, private toastrService: NbToastrService) { }

  ngOnInit() {
    this.email = null;
    this.password = null;
    this.isPassword = true;
  }

  /**
   * @Description Sends credentials to server, then saves token to localStorage
   * and navigates to default page
   */
  onLogin() {
    // let decodedToken = helper.decodeToken("eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJwZXJtaXNzaW9ucyI6WyIqIl0sInJvbGVzIjpbIlZJQkVSIiwiUkNTIiwiSUFNIiwiU01TIiwiQklMTElORyIsIkNVU1RPTUVSIl0sImlzcyI6InNvbHV0aW9uczRtb2JpbGVzLmNvbSIsInNlcnZpY2VzIjpbXSwiZXhwIjoxNTg0NjE2MDE0LCJpYXQiOjE1ODQ1Mjk2MTQsInVzZXJJZCI6MTIwfQ.6vAu6VLUiWJm4JLx2Ogmpx1iY7e9Tc2ImlWnlFdhTTc");
    let user = { username: this.email, password: this.password };
    this.authService.login(user).pipe(takeUntil(this.destroy)).subscribe(data => {
      localStorage.setItem('jwtToken', data['accessToken']);
      this.router.navigate(["/pages/dashboard"]);
    });
  }

  togglePassword() {
    this.isPassword = !this.isPassword;
  }

  ngOnDestroy() {
    this.destroy.next(true);
    this.destroy.unsubscribe();
  }
}
