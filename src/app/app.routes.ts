import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { IngredientsComponent } from './pages/ingredients/ingredients.component';
import { TypeComponent } from './pages/type/type.component';
import { FavoriteComponent } from './pages/favorite/favorite.component';
import { RecipeComponent } from './pages/recipe/recipe.component';
import { LoginComponent } from './pages/login/login.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'ingredients', component: IngredientsComponent },
  { path: 'type/:value', component: TypeComponent },
  { path: 'favorites', component: FavoriteComponent },
  { path: 'recipe/:id', component: RecipeComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: '' },
];
