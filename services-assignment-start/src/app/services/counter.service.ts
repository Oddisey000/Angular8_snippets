import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  usersStatusObj = {
    activeCounter: 0,
    inactiveCounter: 0
  }

  incrementActive() {
    this.usersStatusObj.activeCounter++;
    console.log('Active users: ' + this.usersStatusObj.activeCounter);
  }

  incrementInactive() {
    this.usersStatusObj.inactiveCounter++;
    console.log('Inactive users: ' + this.usersStatusObj.inactiveCounter);
  }

  constructor() { }
}
