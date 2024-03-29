export class GetRandomRecipesAction {
  static readonly type = '[Recipe] fetch random number of recipes';
  constructor(public numberOfRecipes: number = 12, public add: boolean = false) {
  }
}

export class GetRecipesByIdAction {
  static readonly type = '[Recipe] fetch recipe by id';
  constructor(public id: number) {
  }
}

export class SearchRecipesAction {
  static readonly type = '[Recipe] search recipes';
  constructor(public searchTerm: string) {
  }
}

export class UpdateRecipeFiltersAction {
  static readonly type = '[Recipe] search recipes';
  constructor(public ingredients: string[], public selectedCuisine: string, public selectedDiet: string, public selectedMealType: string, public selectedMaxReadyTime: number) {
  }
}
