import { RecipeModel } from "./recipe.model";
import { RecipeFilterModel } from "./recipeFilter.model";

export class RecipeStateModel{
  recipe!: RecipeModel;
  randomRecipe!: RecipeModel[];
  error!: string;
  loading!: boolean;
  recipeFilters!: RecipeFilterModel
}
