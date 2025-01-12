import { Component, AfterViewInit, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import gsap from 'gsap';
import { GSDevTools } from 'gsap-trial/GSDevTools';
import { PageHeaderComponent } from "../../components/page-header/page-header.component";
import { FooterComponent } from "../../../footer/footer.component";
import { IconViewerComponent } from "../../components/icon-viewer/icon-viewer.component";
import { FontViewerComponent } from "../../components/font-viewer/font-viewer.component";

gsap.registerPlugin(GSDevTools);

@Component({
  selector: 'app-fontsandicons',
  standalone: true,
  imports: [PageHeaderComponent, FooterComponent, IconViewerComponent, FontViewerComponent],
  templateUrl: './fontsandicons.component.html',
  styleUrl: './fontsandicons.component.css'
})
export class FontsandiconsComponent implements AfterViewInit {

  private colors = ['#181818', '#5CB8E4', '#F4EEFF'];
  private tl = gsap.timeline({ id: 'Timeline', repeat: -1, repeatDelay: 1.5 });

  constructor(@Inject(PLATFORM_ID) private platformId: object) {}

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
    const paths = document.querySelectorAll('.explore path, .explore line') as NodeListOf<SVGPathElement | SVGLineElement>;
    paths.forEach((node) => this.tween(node));
    }
  }

  private tween(node: SVGPathElement | SVGLineElement): void {
    let path = node;
    const delay = Math.random() * 1;
    const length = (path as SVGPathElement).getTotalLength();

    this.colors.forEach((color, index) => {
      if (index !== 0) {
        path = path.cloneNode() as SVGPathElement;
        node.parentNode?.appendChild(path);
      }
      path.setAttribute('stroke', color);

      this.tl.set(
        path,
        {
          strokeDasharray: `${length + 0.5}`,
          strokeDashoffset: length + 0.6,
          autoRound: false,
        },
        0
      );

      this.tl.to(
        path,
        {
          strokeDashoffset: 0,
          autoRound: false,
          duration: 1.2,
          ease: 'power3.out',
        },
        index * 0.25 + delay
      );
    });
  }

  iconsData = [
  {link: "bi bi-0-circle", desc: "0 Circle"},
  {link: "bi bi-0-square", desc:"0 square"},
  {link: "bi bi-0-square-fill", desc:"0 square fill"},
  {link: "bi bi-1-circle", desc:"1 circle"},
  {link: "bi bi-1-circle-fill", desc:"1 circle fill"},
  {link: "bi bi-1-square", desc:"1 square"},
  {link: "bi bi-1-square-fill", desc:"1 square fill"},
  {link: "bi bi-2-circle", desc:"2 circle"},
  {link: "bi bi-2-circle-fill", desc:"2 circle fill"},
  {link: "bi bi-2-square", desc:"2 square"},
  {link: "bi bi-2-square-fill", desc:"2 square fill"},
  {link: "bi bi-3-circle", desc:"3 circle"},
  {link: "bi bi-3-circle-fill", desc:"3 circle fill"},
  {link: "bi bi-3-square", desc:"3 square"},
  {link: "bi bi-3-square-fill", desc:"3 square fill"},
  {link: "bi bi-4-circle", desc:"4 circle"},
  {link: "bi bi-4-circle-fill", desc:"4 circle fill"},
  {link: "bi bi-4-square", desc:"4 square"},
  {link: "bi bi-4-square-fill", desc:"4 square fill"},
  {link: "bi bi-5-circle", desc:"5 circle"},
  {link: "bi bi-5-circle-fill", desc:"5 circle fill"},
  {link: "bi bi-5-square", desc:"5 square"},
  {link: "bi bi-5-square-fill", desc:"5 square fill"},
  {link: "bi bi-6-circle", desc:"6 circle"},
  {link: "bi bi-6-circle-fill", desc:"6 circle fill"},
  {link: "bi bi-6-square", desc:"6 square"},
  {link: "bi bi-6-square-fill", desc:"6 square fill"},
  {link: "bi bi-7-circle", desc:"7 circle"},
  {link: "bi bi-7-circle-fill", desc:"7 circle fill"},
  {link: "bi bi-7-square", desc:"7 square"},
  {link: "bi bi-7-square-fill", desc:"7 square fill"},
  {link: "bi bi-8-circle", desc:"8 circle"},
  {link: "bi bi-8-circle-fill", desc:"8 circle fill"},
  {link: "bi bi-8-square", desc:"8 square"},
  {link: "bi bi-8-square-fill", desc:"8 square fill"},
  {link: "bi bi-9-circle", desc:"9 circle"},
  {link: "bi bi-9-circle-fill", desc:"9 circle fill"},
  {link: "bi bi-9-square", desc:"9 square"},
  {link: "bi bi-9-square-fill", desc:"9 square fill"},
  {link: "bi bi-activity", desc:"Activity"},
  {link: "bi bi-airplane", desc:"Airplane"},
  {link: "bi bi-airplane-engines", desc:"Airplane engines"},
  {link: "bi bi-airplane-engines-fill", desc:"Airplane engines fill"},
  {link: "bi bi-airplane-fill", desc:"Airplane fill"},
  {link: "bi bi-alarm", desc:"Alarm"},
  {link: "bi bi-alarm-fill", desc:"Alarm Fill"},
  {link: "bi bi-alexa", desc: "Alexa"},
  {link: "bi bi-amazon", desc: "Amazon"},
  ]
}
