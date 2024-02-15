import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';
import { RecipeModel } from '../../models/recipe.model';
import { RecipeFilterModel } from '../../models/recipeFilter.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  // apiUrl = 'https://localhost:7008/api/recipes';
  apiUrl = 'https://foodea.azurewebsites.net/api/recipes';

  constructor(private httpClient: HttpClient) { }

  getRandomRecipes(numberOfRecipes: number = 15): Observable<RecipeModel[] | Error> {
    const loginUrl = `${this.apiUrl}/random?number=${numberOfRecipes}`;
    return this.httpClient.get<any>(loginUrl,{}).pipe(
      catchError((error) => {
        // Handle specific errors based on status code or error object
        if (error.status === 401) {
          return of(new Error('Invalid request'));
        } else if (error.status === 500) {
          return of(new Error('Internal server error, please try again later.'));
        }
        // Return generic error message for unknown errors
        return of(new Error('An error occurred, please try again.'));
      })
    );
  }


  getRecipeById(id: number): Observable<RecipeModel | Error> {
    const url = `${this.apiUrl}/${id}`;
    return this.httpClient.get<any>(url,{}).pipe(
      catchError((error) => {
        // Handle specific errors based on status code or error object
        if (error.status === 401) {
          return of(new Error('Invalid request'));
        } else if (error.status === 500) {
          return of(new Error('Internal server error, please try again later.'));
        }
        // Return generic error message for unknown errors
        return of(new Error('An error occurred, please try again.'));
      })
    );
  }

  // searchRecipes(searchTerm: string): Observable<RecipeModel[] | Error> {
  //   const url = `${this.apiUrl}/search/${searchTerm}`;
  //   return this.httpClient.get<any>(url,{}).pipe(
  //     catchError((error) => {
  //       // Handle specific errors based on status code or error object
  //       if (error.status === 401) {
  //         return of(new Error('Invalid request'));
  //       } else if (error.status === 500) {
  //         return of(new Error('Internal server error, please try again later.'));
  //       }
  //       // Return generic error message for unknown errors
  //       return of(new Error('An error occurred, please try again.'));
  //     })
  //   );
  // }

  searchRecipes(body: RecipeFilterModel): Observable<RecipeModel[] | Error> {
    const url = `${this.apiUrl}/search/`;
    return this.httpClient.post<any>(url,body).pipe(
      catchError((error) => {
        // Handle specific errors based on status code or error object
        if (error.status === 401) {
          return of(new Error('Invalid request'));
        } else if (error.status === 500) {
          return of(new Error('Internal server error, please try again later.'));
        }
        // Return generic error message for unknown errors
        return of(new Error('An error occurred, please try again.'));
      })
    );
  }
}
