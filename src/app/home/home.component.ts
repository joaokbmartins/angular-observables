import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription, Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  template: '<h3>Home Page</h3>',
})
export class HomeComponent implements OnInit, OnDestroy {
  private firstObservableSubscription: Subscription;

  ngOnInit() {
    // this.firstObservableSubscription = interval(1000).subscribe((counter) => {
    //   console.log(counter);
    // });

    const customIntervalObservable = new Observable((observer) => {
      let counter: number = 0;
      setInterval(() => {
        observer.next(counter++);
      }, 1000);
    });
    this.firstObservableSubscription = customIntervalObservable.subscribe(
      (x) => {
        console.log('x: ', x);
      }
    );
  }

  ngOnDestroy() {
    this.firstObservableSubscription.unsubscribe();
  }
}
