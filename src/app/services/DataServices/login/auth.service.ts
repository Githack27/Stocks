import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../../../Models/User';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://localhost:5014/nstocks/user';
  constructor(private httpClient: HttpClient) {}

  signUp(user: User): Observable<User> {
    return this.httpClient.post<User>(`${this.apiUrl}/AddUser`, user);
  }

  getUser(username: string): Observable<User[]> {
    const params = new HttpParams().set('username', username);
    return this.httpClient.get<User[]>(`${this.apiUrl}/GetUser`, { params });

  }
}
