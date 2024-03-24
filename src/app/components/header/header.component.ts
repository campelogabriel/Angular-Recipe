import { AsyncPipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, AsyncPipe],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  name: string = 'Gabriel';
  isAuthenticated$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );
  constructor() {}
  ngOnInit(): void {
    this.isAuthenticated$.next(true);
  }

  setLogout() {
    this.isAuthenticated$.next(false);
  }
}
