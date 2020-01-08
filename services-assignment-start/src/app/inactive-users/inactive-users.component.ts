import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit {
  users: string[];

  ngOnInit() {
    this.users = this.usersService.usersArrayObj.inactive;
  }

  onSetToActive(id: number) {
    this.usersService.setUsersToActive(id);
  }

  constructor(private usersService: UsersService) {}
}
