import { AsyncPipe } from '@angular/common';
import { Component, Input, OnInit, signal } from '@angular/core';
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
  name = signal('');
  isAuthenticated = signal(false);
  constructor() {}
  ngOnInit(): void {
    this.isAuthenticated.set(true);
    this.name.set('Gabriel');
  }

  setLogout() {
    this.isAuthenticated.set(false);
    this.name.set('');
  }
}
