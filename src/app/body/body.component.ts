import { Component } from '@angular/core';
import { CardComponent } from "../shared/components/card/card.component";
import { VideoDisplayerComponent } from "../shared/components/video-displayer/video-displayer.component";

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [CardComponent, VideoDisplayerComponent],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {
cardLinks = [
  {Imagesrc: "../../assets/Cards/11.jpg"},
  {Imagesrc: "../../assets/Cards/13.jpg"},
  {Imagesrc: "../../assets/Cards/2.jpg"},
  {Imagesrc: "../../assets/Cards/5.jpg"},
  {Imagesrc: "../../assets/Cards/3.jpg"},
  {Imagesrc: "../../assets/Cards/6.jpg"},
  {Imagesrc: "../../assets/Cards/7.jpg"},
  {Imagesrc: "../../assets/Cards/8.jpg"},
  {Imagesrc: "../../assets/Cards/9.jpg"},
  {Imagesrc: "../../assets/Cards/10.jpg"},
  {Imagesrc: "../../assets/Cards/12.jpg"},

]

videoLinks = [
  {videosrc: "../../assets/Videos/204565-924698132_small.mp4"},
  {videosrc: "../../assets/Videos/214940_small.mp4"},
  {videosrc: "../../assets/Videos/230248_small.mp4"},
  {videosrc: "../../assets/Videos/233867_medium.mp4"},
  {videosrc: "../../assets/Videos/240320_small.mp4"},
  {videosrc: "../../assets/Videos/waterfall.mp4"},
  {videosrc: "../../assets/Videos/droneview.mp4"},
  {videosrc: "../../assets/Videos/book.mp4"},
  {videosrc: "../../assets/Videos/dna.mp4"},
  {videosrc: "../../assets/Videos/watersplash.mp4"},
  {videosrc: "../../assets/Videos/bombblast.mp4"},
  {videosrc: "../../assets/Videos/dsblast.mp4"},
]
}
