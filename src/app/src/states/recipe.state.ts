import { Injectable } from "@angular/core";
import { Action, Selector, State, StateContext } from "@ngxs/store";
import { RecipeStateModel } from "../models/recipeState.model";
import { GetRandomRecipesAction, GetRecipesByIdAction, SearchRecipesAction } from "../actions/recipe.action";
import { RecipeModel } from "../models/recipe.model";
import { RecipeService } from "../services/recipes/recipe.service";

@State<RecipeStateModel>({
  name: 'recipe',
  defaults: {
    error: '',
    randomRecipe: [],
    recipe: {
      id: 0,
      aggregateLikes: 0,
      // analyzedInstructions: List<AnalyzedInstruction>,
      analyzedInstructions: [],
      cheap: false,
      cookingMinutes: 0,
      creditsText: '',
      cuisines: [],
      dairyFree: false,
      diets: [],
      dishTypes: [],
      // extendedIngredients: List<ExtendedIngredient>,
      extendedIngredients: [],
      gaps: '',
      glutenFree: false,
      healthScore: 0,
      image: '',
      imageType: '',
      instructions: '',
      license: '',
      lowFodmap: false,
      occasions: [],
      // originalId: object,
      preparationMinutes: 0,
      pricePerServing: 0,
      servings: 0,
      sourceName: '',
      sourceUrl: '',
      spoonacularSourceUrl: '',
      summary: '',
      sustainable: false,
      title: '',
      vegan: false,
      vegetarian: false,
      veryHealthy: false,
      veryPopular: false,
      weightWatcherSmartPoints: 0,
    }
  }
})

@Injectable()
export class RecipeState {
  constructor(private recipeService: RecipeService) { }

  @Selector()
  static getRecipes(state: RecipeStateModel){
    return state.randomRecipe;
  }

  @Selector()
  static getRecipe(state: RecipeStateModel){
    return state.recipe;
  }

  @Selector()
  static getError(state: RecipeStateModel){
    return state.error;
  }

  @Action(GetRandomRecipesAction)
  getRandomRecipes(ctx: StateContext<RecipeStateModel>, action: GetRandomRecipesAction) {
    const state = ctx.getState();
    console.log('getRandomRecipes', action.numberOfRecipes);
    return this.recipeService.getRandomRecipes(action.numberOfRecipes).subscribe({
      next: (recipe: any) => {
        if (recipe instanceof Error) {
          ctx.patchState({
            ...state,
            error: (recipe as Error).message
          });
        }
        else {
          ctx.patchState({
            ...state,
            randomRecipe: recipe.recipes as RecipeModel[] ,
            error: ''
          });
        }
      }
    });
  }


  @Action(GetRecipesByIdAction)
  getRecipeById(ctx: StateContext<RecipeStateModel>, action: GetRecipesByIdAction){
    const state = ctx.getState();
    console.log('getRecipeById', action.id);
    return this.recipeService.getRecipeById(action.id).subscribe({
      next: (recipe: any) => {
        if (recipe instanceof Error) {
          ctx.patchState({
            ...state,
            error: (recipe as Error).message
          });
        }
        else {
          ctx.patchState({
            ...state,
            recipe: recipe as RecipeModel,
            error: ''
          });
        }
      }
    });
  }

  @Action(SearchRecipesAction)
  searchRecipes(ctx: StateContext<RecipeStateModel>, action: SearchRecipesAction){
    const state = ctx.getState();
    console.log('searchRecipes', action.searchTerm);
    return this.recipeService.searchRecipes(action.searchTerm).subscribe({
      next: (recipe: any) => {
        if (recipe instanceof Error) {
          ctx.patchState({
            ...state,
            error: (recipe as Error).message
          });
        }
        else {
          ctx.patchState({
            ...state,
            randomRecipe: recipe.recipes as RecipeModel[] ,
            error: ''
          });
        }
      }
    });
  }
}
