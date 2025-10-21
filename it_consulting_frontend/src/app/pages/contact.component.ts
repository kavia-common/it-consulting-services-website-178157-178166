import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ContactService } from '../shared/services/contact.service';

@Component({
  standalone: true,
  selector: 'app-contact-page',
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <main aria-labelledby="contact-title">
      <header class="page-head">
        <h1 id="contact-title">Contact</h1>
        <p class="page-subtitle">Tell us about your goals. We’ll respond within one business day.</p>
      </header>

      <section class="section" aria-labelledby="contact-cta-title">
        <h2 id="contact-cta-title" class="section-title">Get in touch</h2>
        <p class="body">
          Prefer email? Reach us at <a href="mailto:hello&#64;example.com">hello&#64;example.com</a>. Otherwise,
          share a few details below and we’ll schedule a quick discovery call.
        </p>
      </section>

      <section class="section" aria-labelledby="contact-form-title">
        <h2 id="contact-form-title" class="section-title">Quick inquiry</h2>

        <!-- Alerts -->
        <div *ngIf="status==='success'" class="alert alert-success" role="alert" aria-live="polite">
          Thank you! Your message has been sent. We'll get back to you shortly.
        </div>
        <div *ngIf="status==='error'" class="alert alert-error" role="alert" aria-live="assertive">
          Sorry, something went wrong. Please try again.
        </div>

        <form [formGroup]="form" (ngSubmit)="onSubmit()" novalidate aria-describedby="form-note">
          <div class="form-grid">
            <div class="field">
              <label for="name">Name <span aria-hidden="true" class="req">*</span></label>
              <input
                id="name"
                type="text"
                formControlName="name"
                [attr.aria-invalid]="name.invalid && (name.touched || name.dirty) ? 'true' : 'false'"
                [attr.aria-describedby]="name.invalid ? 'name-error' : null"
                placeholder="Your name"
              />
              <div class="error" id="name-error" *ngIf="name.invalid && (name.touched || name.dirty)">
                <span *ngIf="name.errors?.['required']">Name is required.</span>
                <span *ngIf="name.errors?.['minlength']">Name must be at least 2 characters.</span>
              </div>
            </div>

            <div class="field">
              <label for="email">Email <span aria-hidden="true" class="req">*</span></label>
              <input
                id="email"
                type="email"
                formControlName="email"
                [attr.aria-invalid]="email.invalid && (email.touched || email.dirty) ? 'true' : 'false'"
                [attr.aria-describedby]="email.invalid ? 'email-error' : null"
                placeholder="you@company.com"
              />
              <div class="error" id="email-error" *ngIf="email.invalid && (email.touched || email.dirty)">
                <span *ngIf="email.errors?.['required']">Email is required.</span>
                <span *ngIf="email.errors?.['email']">Enter a valid email address.</span>
              </div>
            </div>

            <div class="field">
              <label for="company">Company</label>
              <input
                id="company"
                type="text"
                formControlName="company"
                placeholder="Company (optional)"
              />
            </div>

            <div class="field">
              <label for="subject">Subject <span aria-hidden="true" class="req">*</span></label>
              <input
                id="subject"
                type="text"
                formControlName="subject"
                [attr.aria-invalid]="subject.invalid && (subject.touched || subject.dirty) ? 'true' : 'false'"
                [attr.aria-describedby]="subject.invalid ? 'subject-error' : null"
                placeholder="Brief subject"
              />
              <div class="error" id="subject-error" *ngIf="subject.invalid && (subject.touched || subject.dirty)">
                <span *ngIf="subject.errors?.['required']">Subject is required.</span>
                <span *ngIf="subject.errors?.['minlength']">Subject must be at least 3 characters.</span>
              </div>
            </div>
          </div>

          <div class="field">
            <label for="message">How can we help? <span aria-hidden="true" class="req">*</span></label>
            <textarea
              id="message"
              rows="5"
              formControlName="message"
              [attr.aria-invalid]="message.invalid && (message.touched || message.dirty) ? 'true' : 'false'"
              [attr.aria-describedby]="message.invalid ? 'message-error' : null"
              placeholder="Briefly describe your needs"
            ></textarea>
            <div class="error" id="message-error" *ngIf="message.invalid && (message.touched || message.dirty)">
              <span *ngIf="message.errors?.['required']">Message is required.</span>
              <span *ngIf="message.errors?.['minlength']">Message must be at least 10 characters.</span>
            </div>
          </div>

          <div class="form-actions">
            <button class="btn btn-primary" type="submit" [disabled]="form.invalid || submitting" [attr.aria-disabled]="form.invalid || submitting ? 'true' : null">
              <span *ngIf="!submitting">Submit</span>
              <span *ngIf="submitting">Submitting…</span>
            </button>
            <a routerLink="/services" class="btn btn-ghost">Explore services</a>
          </div>

          <p id="form-note" class="form-note" role="note">
            Fields marked with <span class="req" aria-hidden="true">*</span> are required.
          </p>
        </form>
      </section>
    </main>
  `,
  styles: [`
    :host { display: block; }
    .page-head { margin-bottom: .75rem; }
    h1 { color: #111827; font-size: 1.5rem; margin-bottom: .25rem; }
    .page-subtitle { color: #4b5563; }
    .section {
      background: #ffffff;
      border: 1px solid #e5e7eb;
      border-radius: 12px;
      padding: 1rem 1.25rem;
    }
    .section + .section { margin-top: 1rem; }
    .section-title { color: #111827; font-size: 1.15rem; margin-bottom: .5rem; }
    .body { color: #374151; }

    form { margin-top: .25rem; }
    .form-grid {
      display: grid;
      grid-template-columns: repeat(2, minmax(0,1fr));
      gap: .75rem;
      margin-bottom: .5rem;
    }
    @media (max-width: 720px) {
      .form-grid { grid-template-columns: 1fr; }
    }
    .field {
      display: grid;
      gap: .25rem;
    }
    label { color: #374151; font-size: .95rem; }
    .req { color: #EF4444; }
    input, textarea {
      width: 100%;
      border: 1px solid #e5e7eb;
      background: #ffffff;
      color: #111827;
      border-radius: 8px;
      padding: .6rem .7rem;
      transition: border-color 160ms ease, box-shadow 160ms ease;
    }
    input:focus, textarea:focus {
      border-color: #93c5fd;
      box-shadow: 0 0 0 3px rgba(37,99,235,0.15);
      outline: none;
    }
    .error {
      color: #EF4444;
      font-size: .9rem;
    }
    .form-actions { display: inline-flex; gap: .5rem; margin-top: .25rem; }
    .form-note { color: #6b7280; font-size: .92rem; margin-top: .5rem; }

    /* Alerts using theme variables in styles.css; provide minimal fallback */
    .alert {
      padding: .6rem .8rem;
      border-radius: 10px;
      border: 1px solid var(--color-border);
      box-shadow: var(--shadow-xs);
      margin-bottom: .6rem;
      font-size: .95rem;
    }
    .alert-success {
      background: color-mix(in srgb, var(--color-success) 12%, white);
      border-color: #fde68a;
      color: #92400e;
    }
    .alert-error {
      background: color-mix(in srgb, var(--color-error) 10%, white);
      border-color: #fecaca;
      color: #991b1b;
    }
  `]
})
export class ContactPageComponent {
  private fb = inject(FormBuilder);
  private contactService = inject(ContactService);

  form: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    company: [''],
    subject: ['', [Validators.required, Validators.minLength(3)]],
    message: ['', [Validators.required, Validators.minLength(10)]],
  });

  submitting = false;
  status: 'idle' | 'success' | 'error' = 'idle';

  // PUBLIC_INTERFACE
  /** Submit handler that simulates sending the contact form to a backend. */
  onSubmit(): void {
    this.status = 'idle';
    if (this.form.invalid || this.submitting) {
      this.form.markAllAsTouched();
      return;
    }
    this.submitting = true;

    this.contactService.send(this.form.value).subscribe({
      next: () => {
        this.submitting = false;
        this.status = 'success';
        this.form.reset();
      },
      error: () => {
        this.submitting = false;
        this.status = 'error';
      }
    });
  }

  get name() { return this.form.get('name')!; }
  get email() { return this.form.get('email')!; }
  get company() { return this.form.get('company')!; }
  get subject() { return this.form.get('subject')!; }
  get message() { return this.form.get('message')!; }
}
