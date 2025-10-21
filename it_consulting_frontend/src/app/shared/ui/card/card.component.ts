import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Card component with header, body, and footer slots.
 * Uses global .card styles and CSS variables for theme.
 */
@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="card" [attr.aria-labelledby]="titleId || null">
      <header class="card-header" *ngIf="hasHeader">
        <ng-content select="[card-header]"></ng-content>
      </header>

      <div class="card-body">
        <ng-content></ng-content>
      </div>

      <footer class="card-footer" *ngIf="hasFooter">
        <ng-content select="[card-footer]"></ng-content>
      </footer>
    </section>
  `,
  styles: [`
    :host { display: block; }
    .card-header {
      margin-bottom: .4rem;
    }
    .card-footer {
      margin-top: .6rem;
      color: var(--color-text-subtle);
      font-size: .92rem;
    }
  `]
})
export class CardComponent {
  // PUBLIC_INTERFACE
  /** Optional ID for the title element used by aria-labelledby on the card region. */
  @Input() titleId?: string;

  // PUBLIC_INTERFACE
  /** Whether header slot is used (set true when projecting header). */
  @Input() hasHeader = true;

  // PUBLIC_INTERFACE
  /** Whether footer slot is used (set true when projecting footer). */
  @Input() hasFooter = false;
}
