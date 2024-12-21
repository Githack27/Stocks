import { Routes } from '@angular/router';
import { LoginComponent } from './shared/pages/login/login.component';
import { BodyComponent } from './body/body.component';

export const routes: Routes = [
  { path: '', component: BodyComponent }, 
  { path: 'login', component: LoginComponent },
];
