import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-error',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './error.component.html',
  styleUrl: './error.component.scss'
})
export class ErrorComponent {
  @Input() error: string = "Sorry something went wrong `¯\\_(ツ)_/¯`, please try refreshing the page.\n\n if that does not work please contact support @ madunathabo2@gmail.com."
}
