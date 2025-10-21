import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-services-page',
  imports: [CommonModule],
  template: `
    <section aria-labelledby="services-title">
      <h1 id="services-title">Services</h1>
      <p>Cloud architecture, DevOps enablement, and app modernization.</p>
    </section>
  `,
  styles: [`
    :host { display:block; }
    h1 { font-size: 1.5rem; margin-bottom: .5rem; color:#111827; }
    p { color:#374151; }
  `]
})
export class ServicesPageComponent {}
