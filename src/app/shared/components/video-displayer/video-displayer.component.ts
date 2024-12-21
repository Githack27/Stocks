import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-video-displayer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './video-displayer.component.html',
  styleUrl: './video-displayer.component.css'
})
export class VideoDisplayerComponent {
@Input() videoLinks: {videosrc: string}[] = []

playVideo(event: Event): void {
  const video = (event.target as HTMLElement).querySelector('video') as HTMLVideoElement;
  if (video) video.play();
}

resetVideo(event: Event): void {
  const video = (event.target as HTMLElement).querySelector('video') as HTMLVideoElement;
  if (video) {
    video.pause();
    video.currentTime = 0;
  }
}
}
