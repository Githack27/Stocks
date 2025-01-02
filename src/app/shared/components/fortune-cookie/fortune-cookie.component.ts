import { Component } from '@angular/core';
import { HttpClient, HttpClientModule, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-fortune-cookie',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './fortune-cookie.component.html',
  styleUrl: './fortune-cookie.component.css'
})
export class FortuneCookieComponent {
  quoteText: string = 'Open a Cookie';

  constructor(private http: HttpClient) {}

  generateQuote() {
    const url = 'https://api.forismatic.com/api/1.0/';
    const params = new HttpParams()
      .set('method', 'getQuote')
      .set('format', 'jsonp')
      .set('lang', 'en')
      .set('jsonp', 'callback');

    const callbackName = 'callback';

    const script = document.createElement('script');
    script.src = `${url}?${params.toString()}`;
    script.async = true;

    (window as any)[callbackName] = (data: any) => {
      this.quoteText = data.quoteText || 'No quote available!';
      delete (window as any)[callbackName];
      document.body.removeChild(script);
    };

    document.body.appendChild(script);
  }
}
