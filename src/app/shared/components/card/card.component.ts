import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
@Input() cardLinks: { Imagesrc: string, Caption: string}[] = []
@Input() showPromptButton: boolean = false;
@Input() showImageCaption: boolean = false;
}
