import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PostCardCommintComponent } from '../post-card/components/post-card-commint/post-card-commint.component';

@Component({
  selector: 'app-user-commint',
  templateUrl: './user-commint.component.html',
  standalone: true,
  imports: [CommonModule, FormsModule, PostCardCommintComponent],
  styleUrl: './user-commint.component.css',
})
export class UserCommintComponent {}
