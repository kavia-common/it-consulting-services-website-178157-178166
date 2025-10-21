import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-about-page',
  imports: [CommonModule],
  template: `
    <section aria-labelledby="about-title">
      <h1 id="about-title">About Us</h1>
      <p>We are a team of engineers helping startups scale with confidence.</p>
    </section>
  `,
  styles: [`
    :host { display:block; }
    h1 { font-size: 1.5rem; margin-bottom: .5rem; color:#111827; }
    p { color:#374151; }
  `]
})
export class AboutPageComponent {}
