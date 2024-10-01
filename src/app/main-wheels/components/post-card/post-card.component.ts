import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PostCardCommintComponent } from './components/post-card-commint/post-card-commint.component';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  standalone: true,
  imports: [CommonModule, FormsModule, PostCardCommintComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  styleUrl: './post-card.component.css',
})
export class PostCardComponent {
  date = Date.now();
  @Input() withImage: boolean = true;
}
