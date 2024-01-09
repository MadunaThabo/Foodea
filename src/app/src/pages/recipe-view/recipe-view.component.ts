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
import { LoaderComponent } from '../../components/loader/loader.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { ErrorComponent } from '../../components/error/error.component';

@Component({
    selector: 'app-recipe-view',
    standalone: true,
    templateUrl: './recipe-view.component.html',
    styleUrl: './recipe-view.component.scss',
    imports: [CommonModule, RouterModule, NavigationComponent, LoaderComponent, FooterComponent, ErrorComponent]
})
export class RecipeViewComponent {
  @Input() recipeId: number = 0;
  @Select(RecipeState.getRecipe) recipe$!: Observable<RecipeModel>;
  @Select(RecipeState.getLoading) loading$!: Observable<boolean>;
  @Select(RecipeState.getError) recipesError$!: Observable<string>;


  id: number = 0;
  constructor(private locationStrategy: LocationStrategy, private store: Store) {

  }

  ngOnInit(): void {
    const url = this.locationStrategy.path();
    this.id = parseInt(url.split('/')[2]);
    console.log('passed id', this.id);
    this.store.dispatch(new GetRecipesByIdAction(this.id)).subscribe({
      next: ()=> {
        this.recipe$.subscribe((recipe) => {
          // this.recipe = recipe;
          console.log('recipe', recipe);
        });
      }
    })
  }
}
