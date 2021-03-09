import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-roles-to-badge',
  templateUrl: './roles-to-badge.component.html',
  styleUrls: ['./roles-to-badge.component.scss']
})
export class RolesToBadgeComponent implements OnInit {
  @Input() roles;
  constructor() { }

  ngOnInit(): void {
    console.log(this.roles);
  }

}
