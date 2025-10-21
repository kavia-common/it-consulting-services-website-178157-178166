import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../../shared/ui/card/card.component';
import { TestimonialsComponent } from '../../shared/ui/testimonials/testimonials.component';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, CardComponent, TestimonialsComponent],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {}
