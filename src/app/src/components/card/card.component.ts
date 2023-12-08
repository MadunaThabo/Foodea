import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationExtras, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() recipe: any;

  constructor(private router: Router) {

  }
  viewRecipe(id: number) {
    const navigationExtras: NavigationExtras = {
      queryParams: { id: id }
    };
    this.router.navigate(['/recipe-view'], navigationExtras);
  }
}

