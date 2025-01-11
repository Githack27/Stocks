import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeaderComponent } from "../../components/page-header/page-header.component";
import { FooterComponent } from "../../../footer/footer.component";

@Component({
  selector: 'app-graphics',
  standalone: true,
  imports: [PageHeaderComponent, FooterComponent, CommonModule],
  templateUrl: './graphics.component.html',
  styleUrl: './graphics.component.css'
})
export class GraphicsComponent {
  backgroundUrls = [
  {url: "../../../../assets/Graphics/Mobile-Navigation.png", routeUrl: "/phonenavigation3d", title: "3D-Phone"},
  {url: "../../../../assets/Graphics/Mobius.png", routeUrl: "/mobius3deffect", title: "Mobius-loop"},
  {url: "../../../../assets/Graphics/cubes.png", routeUrl: "/climbingCubes", title: "Climbing Cubes"},
  {url: "../../../../assets/Graphics/Van.png", routeUrl: "/3dvaneffect", title: "3D Van"}
  ]
}
