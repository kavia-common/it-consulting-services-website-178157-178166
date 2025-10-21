import { Component, Input } from '@angular/core';
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
    { label: 'Contact', path: '/contact', ariaLabel: 'Contact us' },
  ];
}
