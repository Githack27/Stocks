import { Component } from '@angular/core';
import { CardComponent } from "../shared/components/card/card.component";
import { VideoDisplayerComponent } from "../shared/components/video-displayer/video-displayer.component";
import { FooterComponent } from "../footer/footer.component";
import { HeaderComponent } from "../header/header.component";

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [CardComponent, VideoDisplayerComponent, FooterComponent, HeaderComponent],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {
cardLinks = [
  {Imagesrc: "../../assets/Cards/11.jpg", Caption: "A graceful woman dressed in a traditional red lace outfit with intricate patterns, sitting elegantly near a serene water body. Her attire includes delicate feathered cuffs, and she wears a pearl necklace that complements her sophisticated look. The scene captures a tranquil and artistic ambiance, with soft natural lighting highlighting her poise and elegance."},
  {Imagesrc: "../../assets/Cards/13.jpg", Caption: ""},
  {Imagesrc: "../../assets/Cards/2.jpg", Caption: ""},
  {Imagesrc: "../../assets/Cards/5.jpg", Caption: ""},
  {Imagesrc: "../../assets/Cards/3.jpg", Caption: ""},
  {Imagesrc: "../../assets/Cards/6.jpg", Caption: ""},
  {Imagesrc: "../../assets/Cards/7.jpg", Caption: ""},
  {Imagesrc: "../../assets/Cards/8.jpg", Caption: ""},
  {Imagesrc: "../../assets/Cards/9.jpg", Caption: ""},
  {Imagesrc: "../../assets/Cards/10.jpg", Caption: ""},
  {Imagesrc: "../../assets/Cards/12.jpg", Caption: ""},

]

videoLinks = [
  {videosrc: "../../assets/Videos/raining.mp4"},
  {videosrc: "../../assets/Videos/dsblast.mp4"},
  {videosrc: "../../assets/Videos/city-drone-view.mp4"},
  {videosrc: "../../assets/Videos/waterwaves.mp4"},
  {videosrc: "../../assets/Videos/waterfall.mp4"},
  {videosrc: "../../assets/Videos/book.mp4"},
  {videosrc: "../../assets/Videos/dna.mp4"},
  {videosrc: "../../assets/Videos/watersplash.mp4"},
  {videosrc: "../../assets/Videos/bombblast.mp4"}
]
}
