import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PostsServicesService {
  constructor() {}

  isOpen: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);
}
