import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-category-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './category-carousel.component.html',
  styleUrl: './category-carousel.component.css'
})
export class CategoryCarouselComponent {
  @Input() blocks : {id: number, background: string, heading: string, captions: string}[] = [];

  currentBackground: string = '';

  ngOnInit(): void {
    this.currentBackground = this.blocks.length > 0 ? this.blocks[0].background : '';
  }

  onHover(index: number): void {
    this.currentBackground = this.blocks[index]?.background || this.currentBackground;
  }

  onMouseOut(): void {
    this.currentBackground = this.blocks.length > 0 ? this.blocks[0].background : '';
  }
}
