import { Component } from '@angular/core';
import { SelectorsComponent } from '../../components/selectors/selectors.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SelectorsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  type: string;

  constructor(private router: Router) {}

  selectType($event: any) {
    this.type = $event;
    this.router.navigateByUrl(`type/${this.type}`);
  }
}
