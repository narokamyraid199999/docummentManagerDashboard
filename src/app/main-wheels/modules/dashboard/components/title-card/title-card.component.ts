import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-title-card',
  templateUrl: './title-card.component.html',
  styleUrl: './title-card.component.css',
})
export class TitleCardComponent {
  @Input() title: string | undefined;
  @Input() icon: string | undefined;
  @Input() number: string | undefined;
  @Input() statics: string | undefined;
  @Input() color: string | undefined;
}
