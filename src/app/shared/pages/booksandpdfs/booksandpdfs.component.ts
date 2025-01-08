import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PdfPptSliderComponent } from "../../components/pdf-ppt-slider/pdf-ppt-slider.component";
import { PageHeaderComponent } from "../../components/page-header/page-header.component";
import { FooterComponent } from "../../../footer/footer.component";
import { CommonBannerComponent } from "../../components/common-banner/common-banner.component";
@Component({
  selector: 'app-booksandpdfs',
  standalone: true,
  imports: [CommonModule, PdfPptSliderComponent, PageHeaderComponent, FooterComponent, CommonBannerComponent],
  templateUrl: './booksandpdfs.component.html',
  styleUrl: './booksandpdfs.component.css'
})
export class BooksandpdfsComponent {
files = [{ImageSource: "../../../../assets/BooksAndPDFs/IKIGAI.png", filesource:"../../../../assets/BooksAndPDFs/Ikigai _ the Japanese secret to a long and happy life.pdf", downloadText: "Ikigai-The Japanese secret to a long and happy life", heading: "Ikigai", author: "Hector Garcia and Francesc Miralles", description: ""},
  {ImageSource:"../../../../assets/BooksAndPDFs/TheAlchemist.png", filesource: "../../../../assets/BooksAndPDFs/the-alchemist-paulo-coelho.pdf", downloadText: "The-Alchemist-paulo-coelho", heading: "The-Alchemist", author: "Paulo Coelho", description: ""},
  {ImageSource:"../../../../assets/BooksAndPDFs/YouareaBadass.png", filesource: "../../../../assets/BooksAndPDFs/You Are a Badass_ How to Stop Doubting Your Greatness and Start Living an Awesome Life ( PDFDrive ).pdf", downloadText: "You Are a Badass_ How to Stop Doubting Your Greatness and Start Living an Awesome Life", heading: "You Are a Badass", author: "Jen Sincero", description: ""},
  {ImageSource:"../../../../assets/BooksAndPDFs/MasteringMLWithPython.png", filesource: "../../../../assets/BooksAndPDFs/Mastering Machine Learning with Python in Six Steps_ A Practical Implementation Guide to Predictive Data Analytics Using Python.pdf", downloadText: "Mastering ML With Python", heading: "Mastering ML With Python", author: "Manohar Swamynathan", description: ""}
]

sliderFiles = [
  {ImageSource: "../../../../assets/BooksAndPDFs/IKIGAI.png"},
  {ImageSource: "../../../../assets/BooksAndPDFs/TheAlchemist.png"},
  {ImageSource: "../../../../assets/BooksAndPDFs/YouareaBadass.png"},
  {ImageSource: "../../../../assets/BooksAndPDFs/MasteringMLWithPython.png"},
  {ImageSource: "../../../../assets/BooksAndPDFs/IKIGAI.png"},
  {ImageSource: "../../../../assets/BooksAndPDFs/TheAlchemist.png"},
  {ImageSource: "../../../../assets/BooksAndPDFs/YouareaBadass.png"},
  {ImageSource: "../../../../assets/BooksAndPDFs/MasteringMLWithPython.png"},
  {ImageSource: "../../../../assets/BooksAndPDFs/IKIGAI.png"},
  {ImageSource: "../../../../assets/BooksAndPDFs/TheAlchemist.png"},
  {ImageSource: "../../../../assets/BooksAndPDFs/YouareaBadass.png"},
  {ImageSource: "../../../../assets/BooksAndPDFs/MasteringMLWithPython.png"},
  {ImageSource: "../../../../assets/BooksAndPDFs/IKIGAI.png"},
  {ImageSource: "../../../../assets/BooksAndPDFs/TheAlchemist.png"},
  {ImageSource: "../../../../assets/BooksAndPDFs/YouareaBadass.png"},
  {ImageSource: "../../../../assets/BooksAndPDFs/MasteringMLWithPython.png"}
]}
