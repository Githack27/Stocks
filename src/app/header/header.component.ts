import { Component } from '@angular/core';
import { NavDropdownComponent } from "../shared/components/nav-dropdown/nav-dropdown.component";
import { ButtonToggleComponent } from "../shared/components/button-toggle/button-toggle.component";
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NavDropdownComponent, ButtonToggleComponent, RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})

export class HeaderComponent {
  constructor(private router: Router) {}

  navigateToLogin() {
    this.router.navigate(['/login']);
  }
  graphics = { text: 'Graphics', href: '/graphics' };
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
  Presentations = { text: 'Presentation Templates', href: '/presentations' };
  presentationDropdown = [
    { text: 'Business', href: '#' },
    { text: 'Education', href: '#' },
    { text: 'Events', href: '#' },
    { text: 'See More', href: '#' }
  ];
}
