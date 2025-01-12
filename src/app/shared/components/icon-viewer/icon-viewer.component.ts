import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-icon-viewer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './icon-viewer.component.html',
  styleUrl: './icon-viewer.component.css'
})
export class IconViewerComponent {
@Input() iconsList: {link: string, desc: string}[] = [];
}
