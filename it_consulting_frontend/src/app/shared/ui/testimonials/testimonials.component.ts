import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Testimonial } from '../../models/testimonial.model';
import { CardComponent } from '../card/card.component';
import { ButtonComponent } from '../button/button.component';

/**
 * Testimonials list component.
 * Renders a list/grid of testimonials using Card and theme utilities.
 */
@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule, CardComponent, ButtonComponent],
  template: `
    <section aria-labelledby="testimonials-title">
      <header class="t-head">
        <h2 id="testimonials-title" class="t-title">What clients say</h2>
        <p class="t-subtitle">Real results from teams we’ve helped.</p>
      </header>

      <div class="t-grid">
        <app-card *ngFor="let t of testimonials; index as i" [titleId]="'t-title-' + i" [hasFooter]="true">
          <h3 class="t-quote" [id]="'t-title-' + i">“{{ t.quote }}”</h3>
          <div card-footer class="t-meta">— {{ t.author }}, {{ t.role }} • {{ t.company }}</div>
        </app-card>
      </div>

      <div class="t-cta" *ngIf="showCTA">
        <app-button variant="ghost" ariaLabel="Read more testimonials">More stories</app-button>
      </div>
    </section>
  `,
  styles: [`
    :host { display: block; }
    .t-head { margin-bottom: .5rem; }
    .t-title { color: var(--color-text); font-size: 1.25rem; margin: 0 0 .15rem 0; }
    .t-subtitle { color: var(--color-text-subtle); margin: 0; }
    .t-grid {
      display: grid;
      grid-template-columns: repeat(2, minmax(0,1fr));
      gap: .75rem;
      margin-top: .5rem;
    }
    .t-quote { color: #111827; font-size: 1.02rem; margin: 0; }
    .t-meta { color: #6b7280; }
    .t-cta { margin-top: .75rem; }
    @media (max-width: 720px) {
      .t-grid { grid-template-columns: 1fr; }
    }
  `]
})
export class TestimonialsComponent {
  // PUBLIC_INTERFACE
  /** The testimonials to render. If not provided, a default local set is used. */
  @Input() testimonials: Testimonial[] = [
    { author: 'CTO', role: 'CTO', company: 'SaaS Company', quote: 'Their team modernized our infrastructure, cutting costs by 30% while boosting reliability.' },
    { author: 'VP Eng', role: 'VP of Engineering', company: 'Fintech Startup', quote: 'We went from monthly to weekly releases in 6 weeks with their DevOps enablement.' },
    { author: 'Head of Platform', role: 'Head of Platform', company: 'E‑commerce', quote: 'Clear guidance, strong ownership, and measurable outcomes. Highly recommended.' },
    { author: 'Engineering Manager', role: 'Eng Manager', company: 'HealthTech', quote: 'Our observability and incident response improved dramatically.' }
  ];

  // PUBLIC_INTERFACE
  /** Whether to show the optional CTA below the grid. */
  @Input() showCTA = false;
}
