import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe',
  standalone: true,
  imports: [NgIf],
  templateUrl: './recipe.component.html',
  styleUrl: './recipe.component.scss',
})
export class RecipeComponent {
  recipeObj: any = {};
  id: string | null;
  favorite: boolean = false;
  isLoading: boolean = false;

  constructor(private route: ActivatedRoute) {
    this.id = this.route.snapshot.queryParamMap.get('id');
  }

  setFavorite() {}
}
