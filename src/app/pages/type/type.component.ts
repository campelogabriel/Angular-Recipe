import { Component } from '@angular/core';
import { ItemRecipeComponent } from '../../components/item-recipe/item-recipe.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-type',
  standalone: true,
  imports: [ItemRecipeComponent],
  templateUrl: './type.component.html',
  styleUrl: './type.component.scss',
})
export class TypeComponent {
  recipes: Array<any> = [];
  isLoading: boolean = false;
  value: string | null = '';

  constructor(private route: ActivatedRoute) {
    this.value = this.route.snapshot.paramMap.get('value');
  }

  setPreviewsRecipes() {}
  setMoreRecipes() {}
}
