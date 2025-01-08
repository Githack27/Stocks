import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pdf-ppt-slider',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pdf-ppt-slider.component.html',
  styleUrl: './pdf-ppt-slider.component.css'
})

export class PdfPptSliderComponent {
  @Input() files: {ImageSource: string, filesource: string, downloadText: string, heading: string, author: string, description: string}[] = [];

  constructor() {}
}
