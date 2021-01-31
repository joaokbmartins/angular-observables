import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UserService {
  isActivated: boolean = false;

  // emitActivated: EventEmitter<boolean> = new EventEmitter<boolean>();
  emitActivated: Subject<boolean> = new Subject<boolean>();

  switchActivate() {
    // this.emitActivated.emit(!this.isActivated);
    this.emitActivated.next(!this.isActivated);
    this.isActivated = !this.isActivated;
  }
}
