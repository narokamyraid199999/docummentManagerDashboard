import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  standalone: true,
  imports: [CommonModule, FormsModule],
  styleUrl: './post-card.component.css',
})
export class PostCardComponent {
  date = Date.now();
}
