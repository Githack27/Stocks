import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from "../shared/components/card/card.component";
import { VideoDisplayerComponent } from "../shared/components/video-displayer/video-displayer.component";
import { FooterComponent } from "../footer/footer.component";
import { HeaderComponent } from "../header/header.component";
import { AuthService } from "../../app/services/DataServices/login/auth.service";
import { Router } from '@angular/router';
import { User } from 'firebase/auth';

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [CommonModule, CardComponent, VideoDisplayerComponent, FooterComponent, HeaderComponent],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent implements OnInit {
  private authService = inject(AuthService);
  private router = inject(Router);
  
  user: User | null = null;

  // ✅ Re-add `videoLinks` and `cardLinks`
  videoLinks = [
    { videosrc: "https://detqel.blog/wp-content/uploads/2025/05/raining.mp4" },
    { videosrc: "../../assets/Videos/dsblast.mp4" },
    { videosrc: "../../assets/Videos/city-drone-view.mp4" },
    { videosrc: "../../assets/Videos/waterwaves.mp4" },
    { videosrc: "../../assets/Videos/waterfall.mp4" },
    { videosrc: "../../assets/Videos/book.mp4" },
    { videosrc: "../../assets/Videos/dna.mp4" },
    { videosrc: "../../assets/Videos/watersplash.mp4" },
    { videosrc: "../../assets/Videos/bombblast.mp4" }
  ];

  cardLinks = [
    { Imagesrc: "../../assets/Cards/11.jpg", Caption: "A graceful woman dressed in a traditional red lace outfit..." },
    { Imagesrc: "../../assets/Cards/13.jpg", Caption: "" },
    { Imagesrc: "../../assets/Cards/2.jpg", Caption: "" },
    { Imagesrc: "../../assets/Cards/5.jpg", Caption: "" },
    { Imagesrc: "../../assets/Cards/3.jpg", Caption: "" },
    { Imagesrc: "../../assets/Cards/6.jpg", Caption: "" },
    { Imagesrc: "../../assets/Cards/7.jpg", Caption: "" },
    { Imagesrc: "../../assets/Cards/8.jpg", Caption: "" },
    { Imagesrc: "../../assets/Cards/9.jpg", Caption: "" },
    { Imagesrc: "../../assets/Cards/10.jpg", Caption: "" },
    { Imagesrc: "../../assets/Cards/12.jpg", Caption: "" },
  ];

  ngOnInit() {
    this.authService.user$.subscribe(user => {
      this.user = user;
    });
  }
  signUp() {
    this.router.navigate(['/login']);  // Redirect to login
  }
  logout() {
    this.authService.logout();
  }
  goToUserProfile() {
    
    this.router.navigate(['/user-profile']);
  }
}
