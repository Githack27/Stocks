import { Routes } from '@angular/router';
import { LoginComponent } from './shared/pages/login/login.component';
import { BodyComponent } from './body/body.component';
import { ImagesComponent } from './shared/pages/images/images.component';
import { VideosComponent } from './shared/pages/videos/videos.component';
import { MusicComponent } from './shared/pages/music/music.component';
import { GraphicsComponent } from './shared/pages/graphics/graphics.component';
import { PresentationsComponent } from './shared/pages/presentations/presentations.component';
import { FontsandiconsComponent } from './shared/pages/fontsandicons/fontsandicons.component';
import { BooksandpdfsComponent } from './shared/pages/booksandpdfs/booksandpdfs.component';

export const routes: Routes = [
  { path: '', component: BodyComponent },
  { path: 'login', component: LoginComponent },
  { path: 'images', component: ImagesComponent},
  { path: 'videos', component: VideosComponent},
  { path: 'music', component: MusicComponent},
  { path: 'graphics', component: GraphicsComponent},
  { path: 'presentations', component: PresentationsComponent},
  { path: 'fonts', component: FontsandiconsComponent},
  { path: 'booksAndpdf', component: BooksandpdfsComponent}
];
