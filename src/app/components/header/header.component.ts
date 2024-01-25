import { Component, Input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  @Input() test: string;

  name: string = 'Gabriel';
  isAuthenticated$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    true
  );

  constructor() {}

  ngOnInit(): void {
    console.log(this.test);
  }

  setLogout() {
    this.isAuthenticated$.next(false);
  }
}
