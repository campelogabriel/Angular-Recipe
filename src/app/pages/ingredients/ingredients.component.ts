import { Component } from '@angular/core';
import { ItemRecipeComponent } from '../../components/item-recipe/item-recipe.component';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-ingredients',
  standalone: true,
  imports: [ItemRecipeComponent, ReactiveFormsModule],
  templateUrl: './ingredients.component.html',
  styleUrl: './ingredients.component.scss',
})
export class IngredientsComponent {
  isLoading: boolean = true;
  recipeArr: Array<any> = [];
  searchText = new FormControl('');

  constructor() {}

  onSubmit(e: any) {
    e.preventDefault();
    this.isLoading = false;
    this.recipeArr.push({
      id: 1,
      title: 'test',
      image: '',
    });
  }
}
