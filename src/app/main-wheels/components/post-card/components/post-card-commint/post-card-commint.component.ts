import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-post-card-commint',
  templateUrl: './post-card-commint.component.html',
  standalone: true,
  imports: [CommonModule, FormsModule],
  styleUrl: './post-card-commint.component.css',
})
export class PostCardCommintComponent {}
