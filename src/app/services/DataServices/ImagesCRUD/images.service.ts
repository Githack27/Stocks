import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Images } from '../../../Models/Images';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {

  private apiUrl = 'http://localhost:5014/nstocks/images';
  constructor(private httpClient: HttpClient) { }

  getImages(heading: string | ''): Observable<Images[]>{
    const params = new HttpParams().set('heading', heading);
    return this.httpClient.get<Images[]>(`${this.apiUrl}/getImages`, { params });
  }
}
