import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval, Subscription, Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  private subscriptionObj: Subscription;

  constructor() { }

  ngOnInit() {
    /*this.subscriptionObj = interval(1000).subscribe(count => {
      console.log(count);
    });*/
    const customIntervalObs = Observable.create((observer: any) => {
      let count = 0;
      setInterval(() => {
        observer.next(count);
        if (count == 2) observer.complete();
        if (count > 3) observer.error(new Error('Count is greater than 3'));
        count++;
      }, 1000);
    });

    let i = customIntervalObs.pipe(filter((data) => { return data > 0;}), map((data: any) => { return 'Round: ' + (data + 1); }));

    this.subscriptionObj = i.subscribe((data: any) => {
      console.log(data);
    }, (error: any) => {
      console.log(error);
      alert(error);
    }, () => {
      console.log('Completed');
    });
  }

  ngOnDestroy(): void {
    this.subscriptionObj.unsubscribe();
  }

}
