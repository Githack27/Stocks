import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  @Input() placeholderText: string = '';
  searchQuery: string = '';
  showPopup: boolean = false;
  onSubmit(): void {
    console.log('Search Query Submitted:', this.searchQuery);
  }
}
