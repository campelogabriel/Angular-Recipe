import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-item-recipe',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './item-recipe.component.html',
  styleUrl: './item-recipe.component.scss',
})
export class ItemRecipeComponent {
  @Input() id: string = '1';
  @Input() title: string = 'test';
  @Input() image: string = '';
}
