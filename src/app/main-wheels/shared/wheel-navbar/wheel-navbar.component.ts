import { Component } from '@angular/core';
import { PostsServicesService } from '../../services/posts-services.service';
import { NotificationService } from '../../services/notification.service';

interface City {
  name: string;
  code: string;
}

@Component({
  selector: 'app-wheel-navbar',
  templateUrl: './wheel-navbar.component.html',
  styleUrl: './wheel-navbar.component.css',
})
export class WheelNavbarComponent {
  constructor(
    private _postService: PostsServicesService,
    private _notificationService: NotificationService
  ) {}

  showPosts() {
    this._postService.isOpen.next(true);
  }

  showNotifications() {
    this._notificationService.isOpen.next(true);
  }
}
