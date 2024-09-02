import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NotificationsService {
  count$ = new BehaviorSubject(20);

  setCount(value: number) {
    this.count$.next(value);
  }
}
