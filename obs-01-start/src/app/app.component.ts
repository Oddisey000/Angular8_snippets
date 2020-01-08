import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from './user/user.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  userActivated = false;
  private activatedSubj: Subscription;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.activatedSubj = this.userService.activateEmitter.subscribe((didActivated: any) => {
      this.userActivated = didActivated;
    });
  }

  ngOnDestroy() {
    this.activatedSubj.unsubscribe();
  }
}
