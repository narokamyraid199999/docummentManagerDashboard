import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SidebarModule } from 'primeng/sidebar';
import { PostsServicesService } from '../../services/posts-services.service';
import { UserCommintComponent } from '../user-commint/user-commint.component';

@Component({
  selector: 'app-posts-side-nav',
  templateUrl: './posts-side-nav.component.html',
  standalone: true,
  imports: [SidebarModule, CommonModule, FormsModule, UserCommintComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  styleUrl: './posts-side-nav.component.css',
})
export class PostsSideNavComponent implements OnInit {
  constructor(private _postService: PostsServicesService) {}

  ngOnInit(): void {
    this.stateChecker();
  }

  stateChecker() {
    this._postService.isOpen.subscribe((data) => {
      this.sidebarVisible = data;
    });
  }

  sidebarVisible: boolean = false;
}
