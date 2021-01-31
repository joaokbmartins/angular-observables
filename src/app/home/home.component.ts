import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription, Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

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
        observer.next(counter);
        if (counter === 5) {
          observer.complete();
        }
        if (counter > 3) {
          observer.error(new Error('Counter greater than 3'));
        }
        counter++;
      }, 1000);
    });

    this.firstObservableSubscription = customIntervalObservable
      .pipe(
        filter((data: number) => {
          return data != 3;
        }),
        map((data: number) => {
          return 'Value: ' + data;
        })
      )
      .subscribe(
        (x) => {
          console.log('x: ', x);
        },
        (error) => {
          console.log(error);
        },
        () => {
          console.log('Completed!');
        }
      );
  }

  ngOnDestroy() {
    this.firstObservableSubscription.unsubscribe();
  }
}
