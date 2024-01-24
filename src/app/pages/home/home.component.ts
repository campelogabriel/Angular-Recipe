import { Component } from '@angular/core';
import { SelectorsComponent } from '../../components/selectors/selectors.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SelectorsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  type: string;

  selectType($event: any) {
    this.type = $event;
  }
}
