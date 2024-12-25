import { Component } from '@angular/core';
import { FooterComponent } from "../../../footer/footer.component";
import { PageHeaderComponent } from "../../components/page-header/page-header.component";
import { CategoryCarouselComponent } from "../../components/category-carousel/category-carousel.component";

@Component({
  selector: 'app-images',
  standalone: true,
  imports: [FooterComponent, PageHeaderComponent, CategoryCarouselComponent],
  templateUrl: './images.component.html',
  styleUrl: './images.component.css'
})
export class ImagesComponent {

}
