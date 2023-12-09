import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss'
})
export class FilterComponent {


  ingredients: string[] = ['tomato', 'cheese', 'pepperoni', 'mushrooms', 'onions', 'olives', 'pineapple', 'ham', 'bacon', 'chicken', 'beef', 'sausage', 'peppers', 'spinach', 'jalapenos', 'anchovies'];
  ingredientText: string = '';
  constructor() {}

  addIngredient() {
    this.ingredients.push(this.ingredientText);
    this.ingredientText = "";
  }

  removeIngredient(_t13: string) {
    this.ingredients = this.ingredients.filter(t => t !== _t13);
  }
}
