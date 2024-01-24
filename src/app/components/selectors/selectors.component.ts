import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-selectors',
  standalone: true,
  imports: [],
  templateUrl: './selectors.component.html',
  styleUrl: './selectors.component.scss',
})
export class SelectorsComponent {
  @Output() type: EventEmitter<string> = new EventEmitter<string>();

  typeArr: string[] = [
    'salad',
    'appetizer',
    'dessert',
    'side dish',
    'main course',
    'bread',
    'breakfast',
    'soup',
    'beverage',
    'sauce',
    'marinade',
    'fingerfood',
    'snack',
    'drink',
  ];

  clickEvent(e: any) {
    this.type.emit(e.target.textContent);
  }
}
