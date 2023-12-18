import { RecipeModel } from "./recipe.model";

export class RecipeStateModel{
  recipe!: RecipeModel;
  randomRecipe!: RecipeModel[];
  error!: string;
}
