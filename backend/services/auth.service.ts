import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private afAuth: AngularFireAuth, private router: Router) {}

  login(email: string, password: string) {
    return this.afAuth.signInWithEmailAndPassword(email, password);
  }

  logout() {
    this.afAuth.signOut().then(() => {
      this.router.navigate(['/login']);
    }).catch((error: any) => {
      console.error('Logout error:', error);
    });
  }
  
  getUser() {
    return this.afAuth.authState;
  }
}
