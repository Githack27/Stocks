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
import { PresentationsComponent } from './shared/pages/presentations/presentations.component';
import { Phone3DComponent } from './shared/graphics-components/phone3-d/phone3-d.component';
import { Mobius3dComponent } from './shared/graphics-components/mobius3d/mobius3d.component';
import { ClimbingcubesComponent } from './shared/graphics-components/climbingcubes/climbingcubes.component';
import { Van3dComponent } from './shared/graphics-components/van3d/van3d.component';
import { AuthService } from './services/DataServices/login/auth.service';
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
    PresentationsComponent,
    Phone3DComponent,
    Mobius3dComponent,
    ClimbingcubesComponent,
    Van3dComponent,
    BrowserModule, RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: [AuthService],
})
export class AppModule {}