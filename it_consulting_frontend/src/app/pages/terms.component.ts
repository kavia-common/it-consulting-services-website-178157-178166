import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-terms-page',
  imports: [CommonModule],
  template: `
    <main aria-labelledby="terms-title">
      <header class="page-head">
        <h1 id="terms-title">Terms of Service</h1>
        <p class="page-subtitle">By using this website, you agree to the terms outlined below.</p>
      </header>

      <section class="section" aria-labelledby="acceptance-title">
        <h2 id="acceptance-title" class="section-title">1. Acceptance of Terms</h2>
        <p class="body">
          By accessing or using our site, you acknowledge that you have read, understand, and agree to be bound by these Terms.
        </p>
      </section>

      <section class="section" aria-labelledby="use-title">
        <h2 id="use-title" class="section-title">2. Permitted Use</h2>
        <p class="body">
          You agree to use the site for lawful purposes and in a way that does not infringe the rights of, restrict, or inhibit
          anyone else’s use of the site.
        </p>
      </section>

      <section class="section" aria-labelledby="content-title">
        <h2 id="content-title" class="section-title">3. Content and Ownership</h2>
        <p class="body">
          All content on this site is provided for informational purposes. We retain all rights, title, and interest in the content,
          trademarks, and branding displayed.
        </p>
      </section>

      <section class="section" aria-labelledby="warranty-title">
        <h2 id="warranty-title" class="section-title">4. Disclaimer of Warranties</h2>
        <p class="body">
          The site and its content are provided “as-is” without warranties of any kind, either express or implied.
        </p>
      </section>

      <section class="section" aria-labelledby="liability-title">
        <h2 id="liability-title" class="section-title">5. Limitation of Liability</h2>
        <p class="body">
          To the fullest extent permitted by law, we are not liable for any indirect, incidental, special, consequential,
          or punitive damages arising out of or related to your use of the site.
        </p>
      </section>

      <section class="section" aria-labelledby="changes-title">
        <h2 id="changes-title" class="section-title">6. Changes to these Terms</h2>
        <p class="body">
          We may update these Terms from time to time. Continued use of the site after changes constitutes acceptance of the updated Terms.
        </p>
      </section>

      <section class="section" aria-labelledby="contact-title">
        <h2 id="contact-title" class="section-title">7. Contact</h2>
        <p class="body">
          Questions about these Terms? Please <a routerLink="/contact" aria-label="Contact us regarding terms">contact us</a>.
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
  `]
})
export class TermsPageComponent {}
