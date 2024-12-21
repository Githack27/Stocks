import { Routes } from '@angular/router';
import { LoginComponent } from './shared/pages/login/login.component';
import { BodyComponent } from './body/body.component';
import { ImagesComponent } from './shared/pages/images/images.component';

export const routes: Routes = [
  { path: '', component: BodyComponent },
  { path: 'login', component: LoginComponent },
  { path: 'images', component: ImagesComponent}
];
