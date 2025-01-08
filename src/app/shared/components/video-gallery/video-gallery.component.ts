import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-video-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './video-gallery.component.html',
  styleUrl: './video-gallery.component.css'
})
export class VideoGalleryComponent {
@Input() backgroundUrls: {heading: string, url: string, resources: number}[] = [];

playVideo(event: Event): void {
  const videoElement = event.target as HTMLVideoElement;
  videoElement.play();
}

pauseVideo(event: Event): void {
  const videoElement = event.target as HTMLVideoElement;
  videoElement.pause();
  videoElement.currentTime=0;
}
}
