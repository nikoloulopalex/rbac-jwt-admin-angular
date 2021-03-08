import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import { UsersService } from '../users.service';

@Component({
  selector: 'ngx-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {


  createUserForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', Validators.required),
  });

  isSubmitted;
  selectedRoles = [
    { roleName: "Administrator", role: "admin", status: false },
    { roleName: "Moderator", role: "mod", status: false },
    { roleName: "User", role: "user", status: false }
  ]

  constructor(private userService: UsersService, private toastrService: NbToastrService, private router: Router) { }

  ngOnInit(): void {
  }

  createUser() {
    this.isSubmitted = true;
    console.log("hereee");
    if (this.createUserForm.invalid) return;
    let user = {
      email: this.createUserForm.value.email,
      username: this.createUserForm.value.username,
      password: this.createUserForm.value.password,
      role: []
    }
    console.log(this.selectedRoles);
    this.selectedRoles.forEach(role => {
      if (role.status == true) {
        user.role.push(role.role);
      }
    })
    console.log(user);
    this.userService.createUser(user).subscribe(data => {
      this.toastrService.show("User created!", 'Success:', { status: 'success' });
      this.router.navigate(['/users']);
    })
  }
}
