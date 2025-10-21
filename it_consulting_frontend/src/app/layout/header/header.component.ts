import { Component, ElementRef, HostListener, Input, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NavLink } from '../../shared/models/nav-link.model';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  /** Site title used next to the logo. */
  @Input() siteTitle = 'IT Consulting';

  /** Primary navigation links. */
  @Input() links: NavLink[] = [
    { label: 'Home', path: '/', ariaLabel: 'Go to home page' },
    { label: 'Services', path: '/services', ariaLabel: 'Learn about our services' },
    { label: 'About', path: '/about', ariaLabel: 'About our company' },
    { label: 'Contact', path: '/contact', ariaLabel: 'Contact us', prominent: true },
  ];

  /** Controls visibility of mobile navigation */
  isMenuOpen = false;

  @ViewChild('menuButton') menuButton?: ElementRef<HTMLButtonElement>;
  @ViewChild('primaryNav') primaryNav?: ElementRef<HTMLElement>;

  // PUBLIC_INTERFACE
  /** Toggle the mobile menu open/closed, and update aria-expanded accordingly. */
  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
    // Focus the first link when opening for better keyboard UX
    if (this.isMenuOpen) {
      setTimeout(() => {
        const firstLink = this.primaryNav?.nativeElement.querySelector('a') as HTMLAnchorElement | null;
        firstLink?.focus();
      }, 0);
    } else {
      this.menuButton?.nativeElement.focus();
    }
  }

  /** Close menu when clicking outside on small screens */
  @HostListener('document:click', ['$event'])
  onDocClick(event: Event): void {
    if (!this.isMenuOpen) return;
    const target = event.target as Node;
    const hostEl = (this.menuButton?.nativeElement.closest('header') ?? null) as HTMLElement | null;
    if (hostEl && !hostEl.contains(target)) {
      this.isMenuOpen = false;
    }
  }

  /** Handle Escape to close menu on small screens */
  @HostListener('document:keydown.escape')
  onEscape(): void {
    if (this.isMenuOpen) {
      this.isMenuOpen = false;
      this.menuButton?.nativeElement.focus();
    }
  }
}
