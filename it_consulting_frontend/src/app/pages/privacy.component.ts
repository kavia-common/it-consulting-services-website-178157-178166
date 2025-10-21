import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-privacy-page',
  imports: [CommonModule],
  template: `
    <main aria-labelledby="privacy-title">
      <header class="page-head">
        <h1 id="privacy-title">Privacy Policy</h1>
        <p class="page-subtitle">We respect your privacy and are committed to protecting it.</p>
      </header>

      <section class="section" aria-labelledby="info-collection-title">
        <h2 id="info-collection-title" class="section-title">Information We Collect</h2>
        <p class="body">
          We collect information you voluntarily provide (like name, email, and message content via our contact form) and basic
          usage information (such as standard log data and anonymized analytics) to improve our services.
        </p>
        <ul class="list">
          <li>Contact details you submit via forms</li>
          <li>Service-related communications</li>
          <li>Basic technical diagnostics (aggregated)</li>
        </ul>
      </section>

      <section class="section" aria-labelledby="use-of-info-title">
        <h2 id="use-of-info-title" class="section-title">How We Use Information</h2>
        <p class="body">
          We use your information to respond to inquiries, provide services, maintain and improve the website, and comply with legal obligations.
        </p>
      </section>

      <section class="section" aria-labelledby="data-sharing-title">
        <h2 id="data-sharing-title" class="section-title">Sharing and Disclosure</h2>
        <p class="body">
          We do not sell your personal information. We may share limited data with trusted service providers who assist us in operating the
          site, subject to confidentiality obligations, and only when necessary.
        </p>
      </section>

      <section class="section" aria-labelledby="security-title">
        <h2 id="security-title" class="section-title">Security</h2>
        <p class="body">
          We implement reasonable administrative and technical safeguards designed to protect your information. However, no method
          of transmission over the Internet is 100% secure.
        </p>
      </section>

      <section class="section" aria-labelledby="your-rights-title">
        <h2 id="your-rights-title" class="section-title">Your Choices</h2>
        <p class="body">
          You may request access, correction, or deletion of your information where applicable. To make a request, please
          <a routerLink="/contact" aria-label="Contact us regarding your data">contact us</a>.
        </p>
      </section>

      <section class="section" aria-labelledby="contact-title">
        <h2 id="contact-title" class="section-title">Contact</h2>
        <p class="body">
          Questions about this policy? Email us at <a href="mailto:hello&#64;example.com">hello&#64;example.com</a>.
        </p>
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
    .list { color: #374151; margin-left: 1rem; }
    .list li { margin: .35rem 0; }
  `]
})
export class PrivacyPageComponent {}
