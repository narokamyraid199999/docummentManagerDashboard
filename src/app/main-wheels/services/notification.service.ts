import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  constructor() {}

  isOpen: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);
}
