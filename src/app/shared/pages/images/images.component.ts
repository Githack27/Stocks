import { Component } from '@angular/core';
import { FooterComponent } from "../../../footer/footer.component";
import { PageHeaderComponent } from "../../components/page-header/page-header.component";
import { CategoryCarouselComponent } from "../../components/category-carousel/category-carousel.component";
import { CollectionsCarouselComponent } from "../../components/collections-carousel/collections-carousel.component";
import { FortuneCookieComponent } from "../../components/fortune-cookie/fortune-cookie.component";
import { CommonBannerComponent } from "../../components/common-banner/common-banner.component";

@Component({
  selector: 'app-images',
  standalone: true,
  imports: [FooterComponent, PageHeaderComponent, CategoryCarouselComponent, CollectionsCarouselComponent, FortuneCookieComponent, CommonBannerComponent],
  templateUrl: './images.component.html',
  styleUrl: './images.component.css'
})
export class ImagesComponent {
  imagesblock = [
  { id: 1, type: "image", background: '../../../../assets/carousel/ai-generated.jpg', heading: 'Technology', captions: 'This is an amazing technology' },
  { id: 2, type: "image", background: '../../../../assets/carousel/sports.jpg', heading: 'Sports', captions: 'This is an amazing technology' },
  { id: 3, type: "image", background: '../../../../assets/carousel/watch.jpg', heading: 'Gadgets', captions: 'This is an amazing technology' },
  { id: 4, type: "image", background: '../../../../assets/carousel/anime_Art.png', heading: 'Anime', captions: 'This is an amazing technology' },
  { id: 5, type: "image", background: '../../../../assets/carousel/arvr.jpg', heading: 'AR/VR', captions: 'This is an amazing technology' }]

  collectionBackgorunds = [
    {heading: "Lifestyle", url: ["../../../../assets/Images/front-view-man-eating.png", "../../../../assets/Images/women-in-fitness.jpg", "../../../../assets/Images/women-eating.jpg", "../../../../assets/Images/fitness-running.jpg"], resources: 150},
    {heading: "Animals", url: ["../../../../assets/Images/cyber-tiger.jpg", "../../../../assets/Images/lion_collection.jpg", "../../../../assets/Images/puppies.jpg", "../../../../assets/Images/rabbits.jpg"], resources: 150},
    {heading: "Foods", url: ["../../../../assets/Images/tikka.jpg", "../../../../assets/Images/ingredients-grilled-wood-flame-plate-generative-ai.jpg", "../../../../assets/Images/juice_vector.jpg", "../../../../assets/Images/biriyani2.jpeg"], resources: 150},
    {heading: "Vectors", url: ["../../../../assets/Images/wolf2.jpg", "../../../../assets/Images/vector3.png", "../../../../assets/Images/bird.png", "../../../../assets/Images/man-8707406_640.png"], resources: 150}
  ]
}
