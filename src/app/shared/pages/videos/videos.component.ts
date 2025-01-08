import { Component } from '@angular/core';
import { PageHeaderComponent } from "../../components/page-header/page-header.component";
import { CategoryCarouselComponent } from "../../components/category-carousel/category-carousel.component";
import { FortuneCookieComponent } from "../../components/fortune-cookie/fortune-cookie.component";
import { CollectionsCarouselComponent } from "../../components/collections-carousel/collections-carousel.component";
import { FooterComponent } from "../../../footer/footer.component";
import { CategoryVideoCarouselComponent } from "../../components/category-video-carousel/category-video-carousel.component";
import { VideoGalleryComponent } from "../../components/video-gallery/video-gallery.component";
import { CommonBannerComponent } from "../../components/common-banner/common-banner.component";

@Component({
  selector: 'app-videos',
  standalone: true,
  imports: [PageHeaderComponent, FortuneCookieComponent, FooterComponent, CategoryVideoCarouselComponent, VideoGalleryComponent, CommonBannerComponent],
  templateUrl: './videos.component.html',
  styleUrl: './videos.component.css'
})
export class VideosComponent {
  videosblock = [
    { id: 1, type: "video", background: '../../../../assets/Videos/grilledbbq.mp4', heading: 'Cooking', captions: 'This is an amazing technology' },
    { id: 2, type: "video", background: '../../../../assets/Videos/vegetable cutting.mp4', heading: 'Veggies', captions: 'This is an amazing technology' },
    { id: 3, type: "video", background: '../../../../assets/Videos/book.mp4', heading: 'Feel Good', captions: 'This is an amazing technology' },
    { id: 4, type: "video", background: '../../../../assets/Videos/dsblast.mp4', heading: 'Anime', captions: 'This is an amazing technology' },
    { id: 5, type: "video", background: '../../../../assets/Videos/raining.mp4', heading: 'Nature', captions: 'This is an amazing technology' }]

    collectionBackgorunds = [
      {heading: "Nature", url: "../../../../assets/Videos/VideoGalleryPart1.mp4", resources: 150},
      {heading: "Anime", url: "../../../../assets/Videos/VideoGalleryPart2.mp4", resources: 150},
      {heading: "Animals", url: "../../../../assets/Videos/AnimalsPart2.mp4", resources: 150},
      {heading: "Foods", url: "../../../../assets/Videos/Foods.mp4", resources: 150}
      ]

    onHover(index: number) {
      const block = this.videosblock[index];
      if (block.type === 'video') {
        const videoElement = document.querySelectorAll('video')[index];
        if (videoElement) {
          videoElement.play();
        }
      }
    }

    onMouseOut() {
      const videos = document.querySelectorAll('video');
      videos.forEach((video) => {
        video.pause();
        video.currentTime = 0;
      });
    }
}
