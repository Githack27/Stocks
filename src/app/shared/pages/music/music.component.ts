import { Component, Renderer2, ElementRef, HostListener } from '@angular/core';
import { PageHeaderComponent } from "../../components/page-header/page-header.component";
import { FooterComponent } from "../../../footer/footer.component";

@Component({
  selector: 'app-music',
  standalone: true,
  imports: [PageHeaderComponent, FooterComponent],
  templateUrl: './music.component.html',
  styleUrl: './music.component.css'
})
export class MusicComponent {
  audio1!: HTMLAudioElement;
  cardGridLen: number = 0;
  numAlbums: number = 0;

  constructor(private renderer: Renderer2, private el: ElementRef) {}

  // SWITCH MODE
  switchMode(): void {
    this.toggleElementById('switchModeBtnDark', 'switchModeBtnDarkToggle');
    this.toggleElementById('switchModeBtnLight', 'switchModeBtnLightToggle');
    this.toggleElementById('logoFooterModeLight', 'logoFooterModeLightToggle');
    this.toggleElementById('logoFooterModeDark', 'logoFooterModeDarkToggle');
  }

  // BACK TO TOP AND FIXED NAVBAR
  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    const backTop = this.el.nativeElement.querySelector('#backTop');
    const navbarFixed = this.el.nativeElement.querySelector('#navbarFixed');

    if (window.scrollY > 200) {
      this.renderer.addClass(backTop, 'back-top-active');
    } else {
      this.renderer.removeClass(backTop, 'back-top-active');
    }

    if (window.scrollY > 50) {
      this.renderer.addClass(navbarFixed, 'nav-fixed-active');
    } else {
      this.renderer.removeClass(navbarFixed, 'nav-fixed-active');
    }
  }

  // PLAY/PAUSE MUSIC
  playSound(): void {
    this.audio1.play();
    this.togglePlayPauseButtons();
  }

  pauseSound(): void {
    this.audio1.pause();
    this.togglePlayPauseButtons();
  }

  private togglePlayPauseButtons(): void {
    this.toggleElementById('pauseBtnPlayCard', 'pauseBtnPlayCardToggle');
    this.toggleElementById('playBtnPlayCard', 'playBtnPlayCardToggle');
  }

  // LIKE MUSIC
  toggleLikeMusicHeader(): void {
    this.toggleElementById('likeMusicHeader', 'likeMusicHeaderToggle');
  }

  toggleLikeMusicPlay(): void {
    this.toggleElementById('likeMusicPlay', 'likeMusicPlayToggle');
  }

  // COLLAPSE MUSIC PLAYER
  toggleMusicPlayer(): void {
    this.toggleElementById('sectionMusicPlayer', 'sectionMusicPlayerToggle');
    this.toggleElementById('collapseMusicPlayerBtn', 'collapseMusicPlayerBtnToggle');
    this.toggleElementById('expandMusicPlayerBtn', 'expandMusicPlayerBtnToggle');
  }

  // FULL PLAYER
  toggleFullPlayer(): void {
    this.toggleElementById('fullPlayer', 'fullPlayer');
  }

  toggleFullPlayerHeaderDropdown(): void {
    this.toggleElementById('fullPlayerHeaderDropdown', 'fullPlayerHeaderDropdown');
  }

  // DOWNLOAD
  download(): void {
    this.toggleElementById('download', 'downloadToggle');
    setTimeout(() => {
      window.location.href = '../../../../assets/Musics/ambient-motivation-270001.mp3';
    }, 3000);
  }

  ngOnInit(): void {
    this.audio1 = new Audio('../../../../assets/Musics/ambient-motivation-270001.mp3');
    const cardGrid = this.el.nativeElement.querySelector('#cardGridLen');
    this.cardGridLen = cardGrid?.children.length || 0;
    this.numAlbums = this.cardGridLen;
  }

  private toggleElementById(id: string, className: string): void {
    const element = this.el.nativeElement.querySelector(`#${id}`);
    if (element) {
      if (element.classList.contains(className)) {
        this.renderer.removeClass(element, className);
      } else {
        this.renderer.addClass(element, className);
      }
    }
  }
}
