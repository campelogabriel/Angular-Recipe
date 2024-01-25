import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { IngredientsComponent } from './pages/ingredients/ingredients.component';
import { TypeComponent } from './pages/type/type.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'ingredients', component: IngredientsComponent },
  { path: 'type/:value', component: TypeComponent },
  { path: '**', redirectTo: '' },
];
