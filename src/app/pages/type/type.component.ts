import { Component } from '@angular/core';
import { ItemRecipeComponent } from '../../components/item-recipe/item-recipe.component';
import { ActivatedRoute } from '@angular/router';
import { RecipeService } from '../../services/recipe.service';

@Component({
  selector: 'app-type',
  standalone: true,
  imports: [ItemRecipeComponent],
  providers: [RecipeService],
  templateUrl: './type.component.html',
  styleUrl: './type.component.scss',
})
export class TypeComponent {
  recipes: Array<any> = [];
  isLoading: boolean = false;
  value: string | null = '';
  offSet: number = 0;

  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService
  ) {
    this.value = this.route.snapshot.paramMap.get('value');
    this.recipeService
      .getRecipeByType(this.value, String(this.offSet))
      .subscribe((res) => {
        console.log(res);
        this.recipes = res.results;
      });
  }

  setPreviewsRecipes() {
    if (this.offSet == 0) return;
    this.offSet--;
    this.recipeService
      .getRecipeByType(this.value, String(this.offSet))
      .subscribe((res) => {
        console.log(res);
        this.recipes = res.results;
      });
  }
  setMoreRecipes() {
    this.offSet++;
    this.recipeService
      .getRecipeByType(this.value, String(this.offSet))
      .subscribe((res) => {
        console.log(res);
        this.recipes = res.results;
      });
  }
}
