import { Routes } from '@angular/router';
import { HomePageComponent } from './src/pages/home-page/home-page.component';
import { RecipeViewComponent } from './src/pages/recipe-view/recipe-view.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent },
  {path: 'recipe-view/:id', component: RecipeViewComponent},
];
