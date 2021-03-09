import { Component, Input, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.scss']
})
export class AllUsersComponent implements OnInit {
  @Input() addButton: boolean = true;
  users = [];
  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.usersService.getUsers({}).subscribe(data => {
      console.log(data);
      this.users = data;
    })
  }

}
