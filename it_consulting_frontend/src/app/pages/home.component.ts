import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-home-page',
  imports: [CommonModule],
  template: `
    <section aria-labelledby="home-title">
      <h1 id="home-title">IT Consulting Services</h1>
      <p class="lead">Modern solutions to optimize your stack and accelerate delivery.</p>
    </section>
  `,
  styles: [`
    :host { display:block; }
    h1 { font-size: 1.75rem; margin-bottom: .5rem; color:#111827; }
    .lead { color:#374151; }
  `]
})
export class HomePageComponent {}
