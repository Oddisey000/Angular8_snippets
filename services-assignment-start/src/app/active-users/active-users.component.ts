import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit {
  users: string[];

  ngOnInit() {
    this.users = this.usersService.usersArrayObj.active;
  }

  onSetToInactive(id: number) {
    this.usersService.setUsersToInactive(id);
  }

  constructor(private usersService: UsersService) {}
}
