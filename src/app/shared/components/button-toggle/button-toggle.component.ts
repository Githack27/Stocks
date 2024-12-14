import { Component, Input } from '@angular/core';
import { SearchComponent } from "../search/search.component";

@Component({
  selector: 'app-button-toggle',
  standalone: true,
  imports: [SearchComponent],
  templateUrl: './button-toggle.component.html',
  styleUrl: './button-toggle.component.css'
})
export class ButtonToggleComponent {
  @Input() FirstText: string = '';
  @Input() LastText: string = '';
  placeholdertext: string = 'Enter Search Keyword';
  isSearchMode: boolean = true;
  toggleMode(event: Event): void {
    const isChecked = (event.target as HTMLInputElement).checked;
    this.isSearchMode = !isChecked;

    this.placeholdertext = this.isSearchMode == true ? 'Enter Search Keywords' : 'Enter Description Prompt';
  }
}
