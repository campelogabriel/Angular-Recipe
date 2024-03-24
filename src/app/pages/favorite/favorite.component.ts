import { Component } from '@angular/core';
import { ItemRecipeComponent } from '../../components/item-recipe/item-recipe.component';
import { BehaviorSubject } from 'rxjs';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-favorite',
  standalone: true,
  imports: [ItemRecipeComponent, RouterLink],
  templateUrl: './favorite.component.html',
  styleUrl: './favorite.component.scss',
})
export class FavoriteComponent {
  isLogged$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);
  recipes: Array<any> = [];
}
