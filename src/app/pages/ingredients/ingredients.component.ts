import { Component } from '@angular/core';
import { ItemRecipeComponent } from '../../components/item-recipe/item-recipe.component';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { RecipeService } from '../../services/recipe.service';
import { Observable, Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ingredients',
  standalone: true,
  imports: [ItemRecipeComponent, ReactiveFormsModule, CommonModule],
  templateUrl: './ingredients.component.html',
  styleUrl: './ingredients.component.scss',
})
export class IngredientsComponent {
  isLoading: boolean;
  recipeArr$: Observable<any[]>;
  // recipeArr$: Subscription;
  recipeObj: any;
  searchText = new FormControl('');

  constructor(private recipeService: RecipeService) {}

  onSubmit(e: any) {
    e.preventDefault();
    this.isLoading = true;

    this.recipeService
      .getRecipeByIng(this.searchText.value)
      .subscribe((obj) => {
        this.recipeObj = obj;
        this.isLoading = false;
      });

    this.searchText.reset();
  }
}
