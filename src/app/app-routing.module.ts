import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { PdfViewerModule } from 'ng2-pdf-viewer';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BodyComponent } from './body/body.component';
import { LoginComponent } from './shared/pages/login/login.component';
import { ImagesComponent } from './shared/pages/images/images.component';
import { HttpClientModule } from '@angular/common/http';
import { PdfPptSliderComponent } from './shared/components/pdf-ppt-slider/pdf-ppt-slider.component';

@NgModule({
  imports: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    LoginComponent,
    ImagesComponent,
    BrowserAnimationsModule,
    MatDialogModule,
    PdfViewerModule,
    HttpClientModule,
    PdfPptSliderComponent,
    BrowserModule, RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: [],
})
export class AppModule {}
