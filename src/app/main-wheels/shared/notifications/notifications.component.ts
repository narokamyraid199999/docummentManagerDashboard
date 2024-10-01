import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../../services/notification.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrl: './notifications.component.css',
})
export class NotificationsComponent implements OnInit {
  constructor(private _notificationsService: NotificationService) {}

  ngOnInit(): void {
    this.stateChecker();
  }

  stateChecker() {
    this._notificationsService.isOpen.subscribe((data) => {
      this.sidebarVisible = data;
    });
  }

  sidebarVisible: boolean = true;
}
