import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-test-roles',
  templateUrl: './test-roles.component.html',
  styleUrls: ['./test-roles.component.scss']
})
export class TestRolesComponent implements OnInit {
  isUser: boolean;
  isMod: boolean;
  isAdmin: boolean;
  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
    this.testUser();
    this.testMod();
    this.testAdmin();
  }

  testUser() {
    this.usersService.testRoleUser()
      .subscribe(
        (response) => {
          this.isUser = true;
        },
        (error) => {
        }
      )
  }

  testMod() {
    this.usersService.testRoleMod()
      .subscribe(
        (response) => {
          this.isMod = true;
        },
        (error) => {
        }
      )
  }

  testAdmin() {
    this.usersService.testRoleAdmin()
      .subscribe(
        (response) => {
          this.isAdmin = true;
        },
        (error) => {
        }
      )
  }

}
