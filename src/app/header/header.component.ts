import { Component } from '@angular/core';
import { NavDropdownComponent } from "../shared/components/nav-dropdown/nav-dropdown.component";
import { ButtonToggleComponent } from "../shared/components/button-toggle/button-toggle.component";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NavDropdownComponent, ButtonToggleComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  graphics = { text: 'Graphics', href: '#' };
  graphicsDropdown = [
    { text: 'Templates', href: '#' },
    { text: '3D Models', href: '#' },
    { text: 'Backgrounds', href: '#' },
    { text: 'Icons', href: '#' },
    { text: 'Patterns', href: '#' },
    { text: 'UI Elements', href: '#' }
  ];
  Presentations = { text: 'Presentation Templates', href: '#' };
  presentationDropdown = [
    { text: 'Business', href: '#' },
    { text: 'Education', href: '#' },
    { text: 'Events', href: '#' },
    { text: 'See More', href: '#' }
  ];
}
