import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainWheelsRoutingModule } from './main-wheels-routing.module';
import { MainWheelsComponent } from './main-wheels.component';
import { WheelNavbarComponent } from './shared/wheel-navbar/wheel-navbar.component';
import { PostsSideNavComponent } from './components/posts-side-nav/posts-side-nav.component';
import { NotificationsComponent } from './shared/notifications/notifications.component';
import { FormsModule } from '@angular/forms';
import { SidebarModule } from 'primeng/sidebar';
import { NotificationCardComponent } from './shared/notifications/components/notification-card/notification-card.component';

@NgModule({
  declarations: [
    MainWheelsComponent,
    WheelNavbarComponent,
    NotificationsComponent,
    NotificationCardComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    MainWheelsRoutingModule,
    PostsSideNavComponent,
    PostsSideNavComponent,
    SidebarModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class MainWheelsModule {}
