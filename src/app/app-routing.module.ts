import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BodyComponent } from './body/body.component';
import { LoginComponent } from './shared/pages/login/login.component';
import { ImagesComponent } from './shared/pages/images/images.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    LoginComponent,
    ImagesComponent,
    HttpClientModule,
    BrowserModule, RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: [],
})
export class AppModule {}
