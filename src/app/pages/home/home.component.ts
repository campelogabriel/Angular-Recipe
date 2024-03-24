import { Component, computed, effect, signal } from '@angular/core';
import { SelectorsComponent } from '../../components/selectors/selectors.component';
import { Router } from '@angular/router';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SelectorsComponent, JsonPipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  type: string;
  // testSignals = signal(1);
  // computedSignals = computed(() => `${this.testSignals()} computed`);
  count: number = 0;
  helloSignals = signal('hello');

  constructor(private router: Router) {
    effect(() => {
      console.log(`helloSignals alterou para: ${this.helloSignals()}`);
    });
  }

  selectType($event: any) {
    this.type = $event;
    this.router.navigateByUrl(`type/${this.type}`);
  }

  setName() {
    // this.testSignals.update((n) => n + 1);
    this.helloSignals.set('Olá');
  }
}
