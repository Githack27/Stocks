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
import { Phone3DComponent } from './shared/graphics-components/phone3-d/phone3-d.component';
import { Mobius3dComponent } from './shared/graphics-components/mobius3d/mobius3d.component';
import { ClimbingcubesComponent } from './shared/graphics-components/climbingcubes/climbingcubes.component';
import { Van3dComponent } from './shared/graphics-components/van3d/van3d.component';
import { UserProfileComponent } from './shared/pages/user-profile/user-profile.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' }, // 👈 Redirects to Login
  { path: 'login', component: LoginComponent },
  { path: 'body', component: BodyComponent }, 
  { path: 'images', component: ImagesComponent},
  { path: 'videos', component: VideosComponent},
  { path: 'music', component: MusicComponent},
  { path: 'graphics', component: GraphicsComponent},
  { path: 'presentations', component: PresentationsComponent},
  { path: 'fonts', component: FontsandiconsComponent},
  { path: 'booksAndpdf', component: BooksandpdfsComponent},
  { path: 'phonenavigation3d', component: Phone3DComponent},
  { path: 'mobius3deffect', component: Mobius3dComponent},
  { path: 'climbingCubes', component: ClimbingcubesComponent},
  { path: 'user-profile', component: UserProfileComponent },
  { path: '3dvaneffect', component: Van3dComponent}
];