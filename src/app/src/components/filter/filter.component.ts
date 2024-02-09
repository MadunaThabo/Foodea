import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RecipeState } from '../../states/recipe.state';
import { Observable } from 'rxjs';
import { Select, Store } from '@ngxs/store';
import { UpdateRecipeFiltersAction } from '../../actions/recipe.action';
import { RecipeFilterModel } from '../../models/recipeFilter.model';

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss'
})
export class FilterComponent {
  //TODO: make sure all the events for the filters are working
  ingredients: string[] = [
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
  @Select(RecipeState.getRecipeFilters)  recipeFilter$!: Observable<RecipeFilterModel>;

  ingredientText: string = '';
  selectedCuisine: string = '';
  selectedDiet: string = '';
  selectedMealType: string = '';
  selectedMaxReadyTime: number = 0;
  constructor(private store: Store) {}

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
    this.store.dispatch(new UpdateRecipeFiltersAction(this.ingredients, this.selectedCuisine, this.selectedDiet, this.selectedMealType, this.selectedMaxReadyTime));
  }

  resetFilters() {
    this.ingredients = [];
    this.selectedCuisine = '';
    this.selectedDiet = '';
    this.selectedMealType = '';
    this.selectedMaxReadyTime = 0;
    this.store.dispatch(new UpdateRecipeFiltersAction(this.ingredients, this.selectedCuisine, this.selectedDiet, this.selectedMealType, this.selectedMaxReadyTime));
  }
}
