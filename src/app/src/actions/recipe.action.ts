export class GetRandomRecipesAction {
  static readonly type = '[Recipe] fetch random number of recipes';
  constructor(public numberOfRecipes: number = 6) {
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
