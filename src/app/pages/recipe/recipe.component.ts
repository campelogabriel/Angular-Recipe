import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipeService } from '../../services/recipe.service';

@Component({
  selector: 'app-recipe',
  standalone: true,
  imports: [NgIf],
  providers: [RecipeService],
  templateUrl: './recipe.component.html',
  styleUrl: './recipe.component.scss',
})
export class RecipeComponent {
  recipeObj: any = {};
  id: string | null;
  favorite: boolean = false;
  isLoading: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService
  ) {
    this.id = this.route.snapshot.paramMap.get('id');
    console.log(this.id);
    if (this.id)
      this.recipeService
        .getRecipeById(this.id)
        .subscribe((a) => (this.recipeObj = a));
  }

  setFavorite() {}
}
