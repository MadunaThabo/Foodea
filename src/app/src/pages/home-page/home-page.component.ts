import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from "../../components/navigation/navigation.component";
import { CarouselComponent } from "../../components/carousel/carousel.component";
import { FilterComponent } from "../../components/filter/filter.component";
import { CardComponent } from "../../components/card/card.component";
import { PaginationComponent } from "../../components/pagination/pagination.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { LoginComponent } from "../../components/login/login.component";
import { Select, Store } from '@ngxs/store';
import { RecipeState } from '../../states/recipe.state';
import { Observable } from 'rxjs';
import { RecipeModel } from '../../models/recipe.model';
import { GetRandomRecipesAction } from '../../actions/recipe.action';
import { ErrorComponent } from "../../components/error/error.component";
import { LoaderComponent } from "../../components/loader/loader.component";

@Component({
    selector: 'app-home-page',
    standalone: true,
    templateUrl: './home-page.component.html',
    styleUrl: './home-page.component.scss',
    imports: [CommonModule, NavigationComponent, CarouselComponent, FilterComponent, CardComponent, PaginationComponent, FooterComponent, LoginComponent, ErrorComponent, LoaderComponent]
})
export class HomePageComponent {
  @Select(RecipeState.getRecipes) recipes$!: Observable<RecipeModel[]>
  @Select(RecipeState.getError) recipesError$!: Observable<string>
  @Select(RecipeState.getLoading) loading$!: Observable<boolean>
  // loading: boolean = true;

  constructor(private store: Store) {

  }

  async ngOnInit(){
    // this.loading = true;/
    await this.getRecipes();
  }

  async getRecipes(){
    await this.store.dispatch(new GetRandomRecipesAction()).subscribe({
      next: (result)=>{
        // this.loading = false;

      },
      error: (error)=>{
        // this.loading$ = false;
      }
    })
  }

  async addMoreRecipes(){

    await this.store.dispatch(new GetRandomRecipesAction(12, true)).subscribe({
      next: (result)=>{
        // this.loading = false;

      },
      error: (error)=>{
        // this.loading$ = false;
      }
    })
  }
}
