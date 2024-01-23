import { Component } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  name: string = 'Gabriel';
  isAuthenticated$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    true
  );

  setLogout() {
    this.isAuthenticated$.next(false);
  }
}
