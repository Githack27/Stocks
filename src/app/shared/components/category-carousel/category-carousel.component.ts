import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-category-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './category-carousel.component.html',
  styleUrl: './category-carousel.component.css'
})
export class CategoryCarouselComponent {
  blocks = [
    { id: 1, background: '../../../../assets/carousel/ai-generated.jpg' },
    { id: 2, background: '../../../../assets/carousel/sports.jpg' },
    { id: 3, background: '../../../../assets/carousel/watch.jpg' },
    { id: 4, background: '../../../../assets/carousel/lion.jpg' },
    { id: 5, background: '../../../../assets/carousel/anime_Art.png' },
    { id: 5, background: '../../../../assets/carousel/arvr.jpg' }
  ];

  currentBackground = this.blocks[0].background;

  onHover(index: number): void {
    this.currentBackground = this.blocks[index].background;
  }
}
