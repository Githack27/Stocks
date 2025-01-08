import { Component } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-fortune-cookie',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './fortune-cookie.component.html',
  styleUrl: './fortune-cookie.component.css'
})
export class FortuneCookieComponent {
  quoteText: string = 'Fortune Cookie - Open to See your fortune';

  constructor(private http: HttpClient) {}

  generateQuote() {
    const url = 'https://fortune-cookie4.p.rapidapi.com/slack';
    const headers = new HttpHeaders({
      'x-rapidapi-host': 'fortune-cookie4.p.rapidapi.com',
      'x-rapidapi-key': 'd170e336b3msh8bdc484dd3df1b1p12f86cjsncf7f285da5f8',
    });

    this.http.get<any>(url, { headers }).subscribe({
      next: (response) => {
        this.quoteText = this.cleanFortuneText(response.text) || 'No fortune available!';
      },
      error: (error) => {
        console.error('Error fetching fortune:', error);
        this.quoteText = 'An error occurred. Please try again.';
      },
    });
  }

  cleanFortuneText(originalText: string): string {
    let cleanedText = originalText.replace("🥠 your fortune reads:", "").trim();
    if (cleanedText.startsWith("'") && cleanedText.endsWith("'")) {
      cleanedText = cleanedText.slice(1, -1).trim();
    }
    return cleanedText;
  }
}
