import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../shared/ui/card/card.component';
import { TestimonialsComponent } from '../shared/ui/testimonials/testimonials.component';

@Component({
  standalone: true,
  selector: 'app-home-page',
  imports: [CommonModule, CardComponent, TestimonialsComponent],
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
