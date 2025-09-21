import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Auth, user, User } from '@angular/fire/auth';
import { CommonModule } from '@angular/common';
import { NavDropdownComponent } from "../shared/components/nav-dropdown/nav-dropdown.component";
import { ButtonToggleComponent } from "../shared/components/button-toggle/button-toggle.component";
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, NavDropdownComponent, ButtonToggleComponent, RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  user$: Observable<User | null>; // Observable for current user
  userName: string = '';
  userAvatar: string = '../../assets/Images/default-user.png'; // Default avatar

  constructor(private router: Router, private auth: Auth) {
    this.user$ = user(auth); // Real-time user stream
  }

  ngOnInit(): void {
    this.user$.subscribe(user => {
      if (user) {
        this.userName = user.displayName || 'Anonymous';
        this.userAvatar = user.photoURL || '../../assets/images/default-user.png';
      }
    });
  }

  // Navigate to user profile page
  goToUserProfile(): void {
    this.router.navigate(['/user-profile']);
  }

  // Navigate to login page
  navigateToLogin(): void {
    this.router.navigate(['/login']);
  }

  // Navigation links for dropdowns
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
