import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-collections-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './collections-carousel.component.html',
  styleUrl: './collections-carousel.component.css'
})
export class CollectionsCarouselComponent {
@Input() backgroundUrls: {heading: string, url: string[], resources: number}[] = [];
}
