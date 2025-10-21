import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Reusable Button component using global theme CSS utility classes.
 * Supports three variants: primary, secondary, and ghost.
 */
@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button
      type="button"
      class="btn"
      [ngClass]="computedClass"
      [attr.aria-label]="ariaLabel || null"
      [disabled]="disabled"
      [attr.aria-disabled]="disabled ? 'true' : null"
    >
      <ng-content></ng-content>
    </button>
  `,
  styles: [`
    :host { display: inline-block; }
    /* Variant helpers integrate with global .btn styles in styles.css */
    .btn-secondary {
      color: var(--color-text);
      background: color-mix(in srgb, var(--color-primary) 10%, white);
      border-color: color-mix(in srgb, var(--color-primary) 50%, white);
      box-shadow: var(--shadow-sm);
    }
    .btn-secondary:hover {
      background: color-mix(in srgb, var(--color-primary) 20%, white);
    }
  `]
})
export class ButtonComponent {
  // PUBLIC_INTERFACE
  /** Which visual style to use. Defaults to 'primary'. */
  @Input() variant: 'primary' | 'secondary' | 'ghost' = 'primary';

  // PUBLIC_INTERFACE
  /** Optional accessible label for icon-only or non-text buttons. */
  @Input() ariaLabel?: string;

  // PUBLIC_INTERFACE
  /** Whether the button is disabled. */
  @Input() disabled = false;

  /** Compute classes to apply based on variant */
  get computedClass(): Record<string, boolean> {
    return {
      'btn-primary': this.variant === 'primary',
      'btn-secondary': this.variant === 'secondary',
      'btn-ghost': this.variant === 'ghost',
    };
  }
}
