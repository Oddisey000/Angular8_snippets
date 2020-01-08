import { Injectable } from '@angular/core';
import { CounterService } from './counter.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  usersArrayObj = {
    active: ['Vitalii', 'Anna'],
    inactive: ['Chris', 'Markus']
  }

  constructor(private counterService: CounterService) { }

  setUsersToActive(id: number) {
    this.usersArrayObj.active.push(this.usersArrayObj.inactive[id]);
    this.usersArrayObj.inactive.splice(id, 1);
    this.counterService.incrementActive();
  }

  setUsersToInactive(id: number) {
    this.usersArrayObj.inactive.push(this.usersArrayObj.active[id]);
    this.usersArrayObj.active.splice(id, 1);
    this.counterService.incrementInactive();
  }
}
