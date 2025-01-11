import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ppt-container',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ppt-container.component.html',
  styleUrl: './ppt-container.component.css'
})
export class PptContainerComponent {
  @Input() pptList: { title: string; thumbnail: string; slidesCount: number }[] = [];
}
