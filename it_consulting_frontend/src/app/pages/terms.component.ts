import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-terms-page',
  imports: [CommonModule],
  template: `
    <section aria-labelledby="terms-title">
      <h1 id="terms-title">Terms of Service</h1>
      <p>Standard terms apply. Use of the service constitutes acceptance.</p>
    </section>
  `,
  styles: [`
    :host { display:block; }
    h1 { font-size: 1.5rem; margin-bottom: .5rem; color:#111827; }
    p { color:#374151; }
  `]
})
export class TermsPageComponent {}
