import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-category-video-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './category-video-carousel.component.html',
  styleUrl: './category-video-carousel.component.css'
})
export class CategoryVideoCarouselComponent {
@Input() blocks : {id: number, background: string, heading: string, captions: string}[] = [];

currentVideo: string = "";

ngOnInit(){
  this.currentVideo = this.blocks.length > 0 ? this.blocks[0].background : "";
}

onHover(index: number): void {
  this.currentVideo = this.blocks[index]?.background || this.currentVideo;
}

onMouseOut(): void {
  this.currentVideo = this.blocks.length > 0 ? this.blocks[0].background : '';
}

}
