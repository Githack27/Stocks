import { Component } from '@angular/core';
import { KnowUsComponent } from "../know-us/know-us.component";
import { CardComponent } from "../shared/components/card/card.component";
import { VideoDisplayerComponent } from "../shared/components/video-displayer/video-displayer.component";

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [KnowUsComponent, CardComponent, VideoDisplayerComponent],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {
cardLinks = [
  {Imagesrc: "../../assets/Cards/nature-8692760_1280.jpg"},
  {Imagesrc: "../../assets/Cards/couch-williams-302-3d-model-obj-fbx-blend.jpg"},
  {Imagesrc: "../../assets/Cards/68zz3qq6.jpg"},
  {Imagesrc: "../../assets/Cards/strawberry-3d-model-cfe08db977.jpg"},
  {Imagesrc: "../../assets/Cards/nature-8692760_1280.jpg"},
  {Imagesrc: "../../assets/Cards/stars-6726176_1280.jpg"},
  {Imagesrc: "../../assets/Cards/village-9236268_1920.jpg"},
  {Imagesrc: "../../assets/Cards/nature-8692760_1280.jpg"},
  {Imagesrc: "../../assets/Cards/couch-williams-302-3d-model-obj-fbx-blend.jpg"},
  {Imagesrc: "../../assets/Cards/68zz3qq6.jpg"},
  {Imagesrc: "../../assets/Cards/nature-8692760_1280.jpg"},
  {Imagesrc: "../../assets/Cards/stars-6726176_1280.jpg"},
  {Imagesrc: "../../assets/Cards/village-9236268_1920.jpg"}
]

videoLinks = [
  {videosrc: "../../assets/Videos/204565-924698132_small.mp4"},
  {videosrc: "../../assets/Videos/214940_small.mp4"},
  {videosrc: "../../assets/Videos/230248_small.mp4"},
  {videosrc: "../../assets/Videos/233867_medium.mp4"},
  {videosrc: "../../assets/Videos/240320_small.mp4"},
]
}
