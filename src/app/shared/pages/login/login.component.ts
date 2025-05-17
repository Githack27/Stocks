import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../../app/services/DataServices/login/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  standalone: true, // ✅ Ensure it's a standalone component
  imports: [FormsModule,CommonModule], // ✅ Add FormsModule here
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email = '';
  password = '';
  errorMessage = '';
  private authService = inject(AuthService);
  private router = inject(Router);

  async onEmailLogin() {
    try {
      const result = await this.authService.loginWithEmail(this.email, this.password);
      console.log('Login successful:', result.user.email); // ✅ Debug log
      this.router.navigate(['/body']);
    } catch (error: any) {
      this.errorMessage = error.message;
    }
  }
  

  async onSignUp() {
    try {
      await this.authService.registerWithEmail(this.email, this.password);
      this.router.navigate(['/body']);
    } catch (error: any) {
      this.errorMessage = error.message;
    }
  }

  async loginWithGoogle() {
    try {
      await this.authService.loginWithGoogle();
      this.router.navigate(['/body']);
    } catch (error: any) {
      this.errorMessage = error.message;
    }
  }

  async loginWithFacebook() {
    try {
      await this.authService.loginWithFacebook();
      this.router.navigate(['/body']);
    } catch (error: any) {
      this.errorMessage = error.message;
    }
  }

  async loginWithTwitter() {
    try {
      await this.authService.loginWithTwitter();
      this.router.navigate(['/dashboard']);
    } catch (error: any) {
      this.errorMessage = error.message;
    }
  }
}