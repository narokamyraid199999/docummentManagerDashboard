import { Component } from '@angular/core';
import { PostsServicesService } from '../../services/posts-services.service';

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
  constructor(private _postService: PostsServicesService) {}

  showPosts() {
    this._postService.isOpen.next(true);
  }
}
