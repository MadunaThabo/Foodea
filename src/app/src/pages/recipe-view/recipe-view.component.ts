import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LocationStrategy } from '@angular/common';
import { NavigationComponent } from "../../components/navigation/navigation.component";
import { Recipe } from '../../models/recipe.model';

@Component({
    selector: 'app-recipe-view',
    standalone: true,
    templateUrl: './recipe-view.component.html',
    styleUrl: './recipe-view.component.scss',
    imports: [CommonModule, RouterModule, NavigationComponent]
})
export class RecipeViewComponent {
  // @Input() recipe: Recipe | undefined;

  id: number = 0;
  recipe: Recipe = {
    id: 1,
    name: "Mock Recipe",
    image: "../../assets/wallpaper-cooking.jpg",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere quidem impedit sunt officiis, exercitationem necessitatibus atque, rem unde cum in explicabo quam fugit libero optio nostrum suscipit a ratione saepLorem ipsum dolor sit amet consectetur adipisicing elit. Facere quidem impedit sunt officiis, exercitationem necessitatibus atque, rem unde cum in explicabo quam fugit libero optio nostrum suscipit a ratione saepLorem ipsum dolor sit amet consectetur adipisicing elit. Facere quidem impedit sunt officiis, exercitationem necessitatibus atque, rem unde cum in explicabo quam fugit libero optio nostrum suscipit a ratione saepLorem ipsum dolor sit amet consectetur adipisicing elit. Facere quidem impedit sunt officiis, exercitationem necessitatibus atque, rem unde cum in explicabo quam fugit libero optio nostrum suscipit a ratione saepLorem ipsum dolor sit amet consectetur adipisicing elit. Facere quidem impedit sunt officiis, exercitationem necessitatibus atque, rem unde cum in explicabo quam fugit libero optio nostrum suscipit a ratione saepLorem ipsum dolor sit amet consectetur adipisicing elit. Facere quidem impedit sunt officiis, exercitationem necessitatibus atque, rem unde cum in explicabo quam fugit libero optio nostrum suscipit a ratione saepLorem ipsum dolor sit amet consectetur adipisicing elit. Facere quidem impedit sunt officiis, exercitationem necessitatibus atque, rem unde cum in explicabo quam fugit libero optio nostrum suscipit a ratione saepLorem ipsum dolor sit amet consectetur adipisicing elit. Facere quidem impedit sunt officiis, exercitationem necessitatibus atque, rem unde cum in explicabo quam fugit libero optio nostrum suscipit a ratione saepLorem ipsum dolor sit amet consectetur adipisicing elit. Facere quidem impedit sunt officiis, exercitationem necessitatibus atque, rem unde cum in explicabo quam fugit libero optio nostrum suscipit a ratione saepLorem ipsum dolor sit amet consectetur adipisicing elit. Facere quidem impedit sunt officiis, exercitationem necessitatibus atque, rem unde cum in explicabo quam fugit libero optio nostrum suscipit a ratione saepLorem ipsum dolor sit amet consectetur adipisicing elit. Facere quidem impedit sunt officiis, exercitationem necessitatibus atque, rem unde cum in explicabo quam fugit libero optio nostrum suscipit a ratione saep",
    ingredients: [
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
    instructions: [
      "loreeeeem ipsum dolor sit amet consectetur adipisicing elit. Facere quidem impedit sunt officiis, exercitationem necessitatibus atque, rem unde cum in explicabo quam fugit libero optio nostrum suscipit a ratione saep",
      "loreeeeem ipsum dolor sit amet consectetur adipisicing elit. Facere quidem impedit sunt officiis, exercitationem necessitatibus atque, rem unde cum in explicabo quam fugit libero optio nostrum suscipit a ratione saep",
      "loreeeeem ipsum dolor sit amet consectetur adipisicing elit. Facere quidem impedit sunt officiis, exercitationem necessitatibus atque, rem unde cum in explicabo quam fugit libero optio nostrum suscipit a ratione saep",
      "loreeeeem ipsum dolor sit amet consectetur adipisicing elit. Facere quidem impedit sunt officiis, exercitationem necessitatibus atque, rem unde cum in explicabo quam fugit libero optio nostrum suscipit a ratione saep",
      "lorem ipsum dolor sit amet consectetur adipisicing elit. Facere quidem impedit sunt officiis, exercitationem necessitatibus atque, rem unde cum in explicabo quam fugit",
      "loreeeeem ipsum dolor sit amet consectetur adipisicing elit. Facere quidem impedit sunt officiis, exercitationem necessitatibus atque, rem unde cum in explicabo quam fugit libero optio nostrum suscipit a ratione saep",
      "loreeeeem ipsum dolor sit amet consectetur adipisicing elit. Facere quidem impedit sunt officiis, exercitationem necessitatibus atque, rem unde cum in explicabo quam fugit libero optio nostrum suscipit a ratione saep",
      "lorem ipsum dolor sit amet consectetur adipisicing elit. Facere quidem impedit sunt officiis, exercitationem necessitatibus atque, rem unde cum in explicabo quam fugit",
      "lorem ipsum dolor sit amet consectetur adipisicing elit. Facere quidem impedit sunt officiis, exercitationem necessitatibus atque, rem unde cum in explicabo quam fugit"
    ]
  };
  constructor(private locationStrategy: LocationStrategy) {

  }

  ngOnInit(): void {
    const url = this.locationStrategy.path();
    this.id = parseInt(url.split('/')[2]);
    console.log('passed id', this.id);
  }
}
