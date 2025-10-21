import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-privacy-page',
  imports: [CommonModule],
  template: `
    <section aria-labelledby="privacy-title">
      <h1 id="privacy-title">Privacy Policy</h1>
      <p>Your privacy matters. We only collect data required to deliver our services.</p>
    </section>
  `,
  styles: [`
    :host { display:block; }
    h1 { font-size: 1.5rem; margin-bottom: .5rem; color:#111827; }
    p { color:#374151; }
  `]
})
export class PrivacyPageComponent {}
