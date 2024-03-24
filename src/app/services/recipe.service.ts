import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  readonly urlByType: string = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${environment.apiKeyRecipe}&type=<type>&offset=<offset>`;

  readonly urlById: string = `https://api.spoonacular.com/recipes/<id>/information?apiKey=${environment.apiKeyRecipe}`;

  readonly urlByIng: string = `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${environment.apiKeyRecipe}&ingredients=<ing>&number=50`;

  constructor(private http: HttpClient) {}

  // <offset>

  getRecipeByType(type: string, offset: string): Observable<any> {
    return this.http.get<any>(
      this.urlByType.replace('<type>', type).replace('<offset>', offset)
    );
  }
  getRecipeById(id: string): Observable<any> {
    return this.http.get<any>(this.urlById.replace('<id>', id));
  }
  getRecipeByIng(ing: string): Observable<any> {
    return this.http.get<any>(this.urlByIng.replace('<ing>', ing));
  }
}
