import { Component, OnInit, Inject, PLATFORM_ID, Renderer2 } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-font-viewer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './font-viewer.component.html',
  styleUrl: './font-viewer.component.css'
})
export class FontViewerComponent implements OnInit {

  constructor(@Inject(PLATFORM_ID) private platformID: object, private renderer: Renderer2) {}
  fonts = [
    { fname: "Astroz" , filesrc: "../../../../assets/Fonts/astroz/Astroz Trial.ttf" },
    { fname: "Super Theory" , filesrc: "../../../../assets/Fonts/super_theory/Super Theory.ttf" },
    { fname: "BlackLister" , filesrc: "../../../../assets/Fonts/blacklisted/Blacklisted.ttf" },
    { fname: "The Last Shuriken" , filesrc: "../../../../assets/Fonts/the-last-shuriken/The Last Shuriken.ttf" },
    { fname: "Daisyogre" , filesrc: "../../../../assets/Fonts/daisyogre/Daisyogre-Regular.ttf" },
    { fname: "Gang Of Three" , filesrc: "../../../../assets/Fonts/gang-of-three/go3v2.ttf" },
    { fname: "Jujutsu Kaisen" , filesrc: "../../../../assets/Fonts/jujutsu-kaisen/jujutsu-kaisen/Jujutsu Kaisen.ttf" }
  ];

  ngOnInit(): void {
    this.loadFonts();
  }

  loadFonts(): void {
    if(isPlatformBrowser(this.platformID)){
      const styleElement = this.renderer.createElement('style');
      let fontFaceRules = '';
      this.fonts.forEach(font => {
        fontFaceRules += `
          @font-face {
            font-family: '${font.fname}';
            src: url('${font.filesrc}') format('truetype');
          }
        `;
      });
      this.renderer.setProperty(styleElement, 'innerHTML', fontFaceRules);
      this.renderer.appendChild(document.head, styleElement);
    }
  }
}
