import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from "../../../footer/footer.component";
import { PptContainerComponent } from "../../components/ppt-container/ppt-container.component";
import { PageHeaderComponent } from '../../components/page-header/page-header.component';
import { CommonBannerComponent } from "../../components/common-banner/common-banner.component";

@Component({
  selector: 'app-presentations',
  standalone: true,
  imports: [PageHeaderComponent, FooterComponent, PptContainerComponent, CommonBannerComponent, CommonModule],
  templateUrl: './presentations.component.html',
  styleUrl: './presentations.component.css'
})
export class PresentationsComponent {
  ppFiles =  [
    {
      title: 'Art And Nature - Feel Good Theme for Education',
      thumbnail: '../../../../assets/Presentations/OutputImages/ArtAndNature.png',
      slidesCount: 12
    },
    {
      title: 'Class Agenda - Classy and Trendy Theme for Childrens',
      thumbnail: '../../../../assets/Presentations/OutputImages/ClassAgenda.png',
      slidesCount: 12
    },
    {
      title: 'Portfolio - Learn To Create Professional Portfolio',
      thumbnail: '../../../../assets/Presentations/OutputImages/CreatePortfolio.png',
      slidesCount: 12
    },
    {
      title: 'Gaming - Want to attract Teens, Get this theme and hook em up',
      thumbnail: '../../../../assets/Presentations/OutputImages/GameNight.png',
      slidesCount: 10
    },
    {
      title: 'Color UI Design - Professional Presentations',
      thumbnail: '../../../../assets/Presentations/OutputImages/SoftColorsUIDesign.png',
      slidesCount: 44
    },
    {
      title: 'Tech StartUp - Be the first to start your Ideas',
      thumbnail: '../../../../assets/Presentations/OutputImages/Tech_Startup.png',
      slidesCount: 88
    }
  ]

  sliderFiles = [
    {ImageSource: "../../../../assets/Presentations/OutputImages/ClassAgenda.png"},
    {ImageSource: "../../../../assets/Presentations/OutputImages/Tech_Startup.png"},
    {ImageSource: "../../../../assets/Presentations/OutputImages/SoftColorsUIDesign.png"},
    {ImageSource: "../../../../assets/Presentations/OutputImages/GameNight.png"},
    {ImageSource: "../../../../assets/Presentations/OutputImages/CreatePortfolio.png"},
    {ImageSource: "../../../../assets/Presentations/OutputImages/ArtAndNature.png"},
  ]
}
