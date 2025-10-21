import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/home.component').then(m => m.HomePageComponent),
    title: 'Home • IT Consulting'
  },
  {
    path: 'services',
    loadComponent: () =>
      import('./pages/services.component').then(m => m.ServicesPageComponent),
    title: 'Services • IT Consulting'
  },
  {
    path: 'about',
    loadComponent: () =>
      import('./pages/about.component').then(m => m.AboutPageComponent),
    title: 'About • IT Consulting'
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('./pages/contact.component').then(m => m.ContactPageComponent),
    title: 'Contact • IT Consulting'
  },
  {
    path: 'privacy',
    loadComponent: () =>
      import('./pages/privacy.component').then(m => m.PrivacyPageComponent),
    title: 'Privacy • IT Consulting'
  },
  {
    path: 'terms',
    loadComponent: () =>
      import('./pages/terms.component').then(m => m.TermsPageComponent),
    title: 'Terms • IT Consulting'
  },
  { path: '**', redirectTo: '' }
];
