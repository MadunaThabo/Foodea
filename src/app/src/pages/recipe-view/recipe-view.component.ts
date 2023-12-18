import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LocationStrategy } from '@angular/common';
import { NavigationComponent } from "../../components/navigation/navigation.component";
import { RecipeModel } from '../../models/recipe.model';
import { Select, Store } from '@ngxs/store';
import { GetRecipesByIdAction } from '../../actions/recipe.action';
import { RecipeState } from '../../states/recipe.state';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-recipe-view',
    standalone: true,
    templateUrl: './recipe-view.component.html',
    styleUrl: './recipe-view.component.scss',
    imports: [CommonModule, RouterModule, NavigationComponent]
})
export class RecipeViewComponent {
  // @Input() recipe: Recipe | undefined;
  @Input() recipeId: number = 0;
  @Select(RecipeState.getRecipe) recipe$!: Observable<RecipeModel>;

  id: number = 0;
  recipe: RecipeModel = {
    id: 1,
    title: "Mock Recipe",
    image: "../../assets/wallpaper-cooking.jpg",
    summary: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere quidem impedit sunt officiis, exercitationem necessitatibus atque, rem unde cum in explicabo quam fugit libero optio nostrum suscipit a ratione saepLorem ipsum dolor sit amet consectetur adipisicing elit. Facere quidem impedit sunt officiis, exercitationem necessitatibus atque, rem unde cum in explicabo quam fugit libero optio nostrum suscipit a ratione saepLorem ipsum dolor sit amet consectetur adipisicing elit. Facere quidem impedit sunt officiis, exercitationem necessitatibus atque, rem unde cum in explicabo quam fugit libero optio nostrum suscipit a ratione saepLorem ipsum dolor sit amet consectetur adipisicing elit. Facere quidem impedit sunt officiis, exercitationem necessitatibus atque, rem unde cum in explicabo quam fugit libero optio nostrum suscipit a ratione saepLorem ipsum dolor sit amet consectetur adipisicing elit. Facere quidem impedit sunt officiis, exercitationem necessitatibus atque, rem unde cum in explicabo quam fugit libero optio nostrum suscipit a ratione saepLorem ipsum dolor sit amet consectetur adipisicing elit. Facere quidem impedit sunt officiis, exercitationem necessitatibus atque, rem unde cum in explicabo quam fugit libero optio nostrum suscipit a ratione saepLorem ipsum dolor sit amet consectetur adipisicing elit. Facere quidem impedit sunt officiis, exercitationem necessitatibus atque, rem unde cum in explicabo quam fugit libero optio nostrum suscipit a ratione saepLorem ipsum dolor sit amet consectetur adipisicing elit. Facere quidem impedit sunt officiis, exercitationem necessitatibus atque, rem unde cum in explicabo quam fugit libero optio nostrum suscipit a ratione saepLorem ipsum dolor sit amet consectetur adipisicing elit. Facere quidem impedit sunt officiis, exercitationem necessitatibus atque, rem unde cum in explicabo quam fugit libero optio nostrum suscipit a ratione saepLorem ipsum dolor sit amet consectetur adipisicing elit. Facere quidem impedit sunt officiis, exercitationem necessitatibus atque, rem unde cum in explicabo quam fugit libero optio nostrum suscipit a ratione saepLorem ipsum dolor sit amet consectetur adipisicing elit. Facere quidem impedit sunt officiis, exercitationem necessitatibus atque, rem unde cum in explicabo quam fugit libero optio nostrum suscipit a ratione saep",
    extendedIngredients: [
      "Ingredient 1",
      "Ingredient 2",
      "Ingredient 4",
      "Ingredient 5",
      "Ingredient 6",
      "Ingredient 7",
      "Ingredient 8",
      "Ingredient 10",
      "Ingredient 11",
      "Ingredient 12",
      "Ingredient 13",
      "Ingredient 14",
      "Ingredient 15",
      "Ingredient 16",
      "Ingredient 17",
      "Ingredient 18",
      "Ingredient 19",
      "Ingredient 20",
    ],
    analyzedInstructions: [
      "loreeeeem ipsum dolor sit amet consectetur adipisicing elit. Facere quidem impedit sunt officiis, exercitationem necessitatibus atque, rem unde cum in explicabo quam fugit libero optio nostrum suscipit a ratione saep",
      "loreeeeem ipsum dolor sit amet consectetur adipisicing elit. Facere quidem impedit sunt officiis, exercitationem necessitatibus atque, rem unde cum in explicabo quam fugit libero optio nostrum suscipit a ratione saep",
      "loreeeeem ipsum dolor sit amet consectetur adipisicing elit. Facere quidem impedit sunt officiis, exercitationem necessitatibus atque, rem unde cum in explicabo quam fugit libero optio nostrum suscipit a ratione saep",
      "loreeeeem ipsum dolor sit amet consectetur adipisicing elit. Facere quidem impedit sunt officiis, exercitationem necessitatibus atque, rem unde cum in explicabo quam fugit libero optio nostrum suscipit a ratione saep",
      "lorem ipsum dolor sit amet consectetur adipisicing elit. Facere quidem impedit sunt officiis, exercitationem necessitatibus atque, rem unde cum in explicabo quam fugit",
      "loreeeeem ipsum dolor sit amet consectetur adipisicing elit. Facere quidem impedit sunt officiis, exercitationem necessitatibus atque, rem unde cum in explicabo quam fugit libero optio nostrum suscipit a ratione saep",
      "loreeeeem ipsum dolor sit amet consectetur adipisicing elit. Facere quidem impedit sunt officiis, exercitationem necessitatibus atque, rem unde cum in explicabo quam fugit libero optio nostrum suscipit a ratione saep",
      "lorem ipsum dolor sit amet consectetur adipisicing elit. Facere quidem impedit sunt officiis, exercitationem necessitatibus atque, rem unde cum in explicabo quam fugit",
      "lorem ipsum dolor sit amet consectetur adipisicing elit. Facere quidem impedit sunt officiis, exercitationem necessitatibus atque, rem unde cum in explicabo quam fugit"
    ],
    aggregateLikes: 0,
    cheap: false,
    cookingMinutes: 0,
    creditsText: '',
    cuisines: [],
    dairyFree: false,
    diets: [],
    dishTypes: [],
    gaps: '',
    glutenFree: false,
    healthScore: 0,
    imageType: '',
    instructions: '',
    license: '',
    lowFodmap: false,
    occasions: [],
    preparationMinutes: 0,
    pricePerServing: 0,
    servings: 0,
    sourceName: '',
    sourceUrl: '',
    spoonacularSourceUrl: '',
    sustainable: false,
    vegan: false,
    vegetarian: false,
    veryHealthy: false,
    veryPopular: false,
    weightWatcherSmartPoints: 0
  };

  constructor(private locationStrategy: LocationStrategy, private store: Store) {

  }

  ngOnInit(): void {
    const url = this.locationStrategy.path();
    this.id = parseInt(url.split('/')[2]);
    console.log('passed id', this.id);
    this.store.dispatch(new GetRecipesByIdAction(this.id)).subscribe({
      next: ()=> {
        this.recipe$.subscribe((recipe) => {
          this.recipe = recipe;
          console.log('recipe', recipe);
        });
      }
    })
  }
}
