import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-commint',
  templateUrl: './user-commint.component.html',
  standalone: true,
  imports: [CommonModule, FormsModule],
  styleUrl: './user-commint.component.css',
})
export class UserCommintComponent {}
