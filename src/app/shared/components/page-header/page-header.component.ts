import { Component } from '@angular/core';
import { NavDropdownComponent } from "../nav-dropdown/nav-dropdown.component";
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-page-header',
  standalone: true,
  imports: [NavDropdownComponent, RouterLink, RouterLinkActive],
  templateUrl: './page-header.component.html',
  styleUrl: './page-header.component.css'
})
export class PageHeaderComponent {
  constructor(private router: Router) {}

  navigateToLogin() {
    this.router.navigate(['/login']);
  }

  graphics = { text: 'Graphics', href: '#' };
  graphicsDropdown = [
    { text: 'Templates', href: '#' },
    { text: '3D Models', href: '#' },
    { text: 'Gifs', href: '#' },
    { text: 'Icons', href: '#' },
    { text: 'Vectors', href: '#' },
    { text: 'UI Elements', href: '#' },
    { text: 'Wallpaper', href: '#' },
    { text: 'Cards', href: '#' }
  ];
  Presentations = { text: 'Presentation Templates', href: '#' };
  presentationDropdown = [
    { text: 'Business', href: '#' },
    { text: 'Education', href: '#' },
    { text: 'Events', href: '#' },
    { text: 'See More', href: '#' }
  ];
}
