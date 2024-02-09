import { Injectable } from "@angular/core";
import { Action, Selector, State, StateContext } from "@ngxs/store";
import { RecipeStateModel } from "../models/recipeState.model";
import { GetRandomRecipesAction, GetRecipesByIdAction, SearchRecipesAction, UpdateRecipeFiltersAction } from "../actions/recipe.action";
import { RecipeModel } from "../models/recipe.model";
import { RecipeService } from "../services/recipes/recipe.service";

@State<RecipeStateModel>({
  name: 'recipe',
  defaults: {
    error: '',
    randomRecipe: [],
    loading: true,
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
    },
    recipeFilters: {
      query: '',
      ingredients: [],
      cuisine:'',
      diet: '',
      type: '',
      mealPreparationTime:  0,
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

  @Selector()
  static getLoading(state: RecipeStateModel){
    return state.loading;
  }

  @Selector()
  static getRecipeFilters(state: RecipeStateModel){
    return state.recipeFilters;
  }

  // TODO: for all the functions make sure before sending a request we make the error and loading true, maybe make a function for it?
  @Action(UpdateRecipeFiltersAction)
  updateRecipeFiltersAction(ctx: StateContext<RecipeStateModel>, action: UpdateRecipeFiltersAction){
    const state = ctx.getState();
    console.log('updateRecipeFiltersAction', action);
    ctx.patchState({
      ...state,
      recipeFilters: {
        query: '',
        ingredients: action.ingredients,
        cuisine: action.selectedCuisine,
        diet: action.selectedDiet,
        type: action.selectedMealType,
        mealPreparationTime: action.selectedMaxReadyTime,
      }
    });
  }

  @Action(GetRandomRecipesAction)
  getRandomRecipes(ctx: StateContext<RecipeStateModel>, action: GetRandomRecipesAction) {
    const state = ctx.getState();
    console.log('getRandomRecipes', action.numberOfRecipes);
    ctx.patchState({
      ...state,
      loading: true
    });
    return this.recipeService.getRandomRecipes(action.numberOfRecipes).subscribe({
      next: (recipe: any) => {
        if (recipe instanceof Error) {
          ctx.patchState({
            ...state,
            error: (recipe as Error).message,
            loading: false
          });
        }
        else {
          if(action.add){
            ctx.patchState({
              ...state,
              randomRecipe: [...state.randomRecipe, ...recipe.recipes] as RecipeModel[] ,
              error: '',
              loading: false
            });

          }
          else{
            ctx.patchState({
              ...state,
              randomRecipe: recipe.recipes as RecipeModel[] ,
              error: '',
              loading: false
            });
          }
        }
      }
    });
  }

  @Action(GetRecipesByIdAction)
  getRecipeById(ctx: StateContext<RecipeStateModel>, action: GetRecipesByIdAction){
    const state = ctx.getState();
    ctx.patchState({
      ...state,
      loading: true
    });
    console.log('getRecipeById', action.id);
    return this.recipeService.getRecipeById(action.id).subscribe({
      next: (recipe: any) => {
        if (recipe instanceof Error) {
          ctx.patchState({
            ...state,
            error: (recipe as Error).message,
            loading: false
          });
        }
        else {
          ctx.patchState({
            ...state,
            recipe: recipe as RecipeModel,
            error: '',
            loading: false
          });
        }
      }
    });
  }

  @Action(SearchRecipesAction)
  searchRecipes(ctx: StateContext<RecipeStateModel>, action: SearchRecipesAction){
    console.log('searchRecipes', action.searchTerm);
    const state = ctx.getState();
    ctx.patchState({
      ...state,
      loading: true
    });
    var body = {
      query: action.searchTerm,
      cuisine: state.recipeFilters.cuisine,
      diet: state.recipeFilters.diet,
      type: state.recipeFilters.type,
      mealPreparationTime: state.recipeFilters.mealPreparationTime,
      ingredients: state.recipeFilters.ingredients,
    }
    return this.recipeService.searchRecipes(body).subscribe({
      next: (recipe: any) => {
        if (recipe instanceof Error) {
          ctx.patchState({
            ...state,
            error: (recipe as Error).message,
            loading: false
          });
        }
        else {
          ctx.patchState({
            ...state,
            randomRecipe: recipe.recipes as RecipeModel[] ,
            error: '',
            loading: false
          });
        }
      }
    });
  }
}
