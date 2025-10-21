import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-contact-page',
  imports: [CommonModule],
  template: `
    <section aria-labelledby="contact-title">
      <h1 id="contact-title">Contact</h1>
      <p>Email us at hello&#64;example.com to get started.</p>
    </section>
  `,
  styles: [`
    :host { display:block; }
    h1 { font-size: 1.5rem; margin-bottom: .5rem; color:#111827; }
    p { color:#374151; }
  `]
})
export class ContactPageComponent {}
