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

  ingredients: string[] = [
    'tomato',
    'cheese',
    'pepperoni',
    'mushrooms',
    'onions',
    'olives',
    'pineapple',
    'ham',
    'bacon',
    'chicken',
    'beef',
    'sausage',
    'peppers',
    'spinach',
    'jalapenos',
    'anchovies'
  ];
  cuisines: string[] = [
    "African",
    'Asian',
    'American',
    'British',
    'Cajun',
    'Caribbean',
    'Chinese',
    'Eastern European',
    'European',
    'French',
    'German',
    'Greek',
    'Indian',
    'Irish',
    'Italian',
    'Japanese',
    'Jewish',
    'Korean',
    'Latin American',
    'Mediterranean',
    'Mexican',
    'Middle Eastern',
    'Nordic',
    'Southern',
    'Spanish',
    'Thai',
    'Vietnamese',
  ];
  diets: string[] = [
    'Gluten Free',
    'Ketogenic',
    'Vegetarian',
    'Lacto-Vegetarian',
    'Ovo-Vegetarian',
    'Vegan',
    'Pescetarian',
    'Paleo',
    'Primal',
    'low-FODMAP',
    'Whole30',
  ];
  mealTypes: string[] = [
    'main course',
    'side dish',
    'dessert',
    'appetizer',
    'salad',
    'bread',
    'breakfast',
    'soup',
    'beverage',
    'sauce',
    'marinade',
    'fingerfood',
    'snack',
    'drink',
  ];
  ingredientText: string = '';
  selectedCuisine: string = '';
  selectedDiet: string = '';
  selectedMealType: string = '';
  selectedMaxReadyTime: number = 0;
  constructor() {}

  addIngredient() {
    this.ingredients.push(this.ingredientText);
    this.ingredientText = "";
  }

  removeIngredient(ingredient: string) {
    this.ingredients = this.ingredients.filter(item => item !== ingredient);
  }

  applyFilters() {
    console.log('apply filters');
    console.log('ingredients', this.ingredients);
    console.log('selected cuisince', this.selectedCuisine);
    console.log('selected diet', this.selectedDiet);
    console.log('selected meal type', this.selectedMealType);
    console.log('selected max ready time', this.selectedMaxReadyTime);
  }
}
