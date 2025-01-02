import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-nav-dropdown',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nav-dropdown.component.html',
  styleUrl: './nav-dropdown.component.css'
})
export class NavDropdownComponent {
  @Input() mainLink!: { text: string, href: string };
  @Input() dropdownLinks: { text: string, href: string }[] = [];
  @Input() pageHeader: boolean = false;
}
