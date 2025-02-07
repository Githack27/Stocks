import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../../services/DataServices/login/auth.service';
import { HttpErrorResponse } from '@angular/common/http';
import { User } from '../../../Models/User';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  message: string = '';
  signUpForm!: FormGroup;
  loginForm!: FormGroup;

  constructor(private fb:FormBuilder, private authService: AuthService) {
    this.initializeForms();
  }

  private initializeForms(): void{
    this.loginForm= this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });

    this.signUpForm = this.fb.group({
      userName: ['', [Validators.required, Validators.minLength(8)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      isContributor: [false],
      isExternalUser: [false],
      externalUserID: ['']
    });
  }

  onLoginSubmit(): void {
    if (this.loginForm.invalid) {
      this.message = 'Please enter valid login credentials!';
      console.log(this.message);
      return;
    }

    const username = this.loginForm.value.userName;
    this.authService.getUser(username).subscribe({
      next: (users) => {
        if (users.length > 0) {
          this.message = 'Login successful!';
        } else {
          this.message = 'Invalid credentials!';
        }
        console.log(this.message);
      },
      error: (error: HttpErrorResponse) => {
        this.message = 'Login failed!';
        console.error(error);
      }
    });
  }

  onSignUpSubmit(): void {
    if (this.signUpForm.invalid) {
      this.message = 'Please fill all fields correctly!';
      console.log(this.message);
      return;
    }

    const userData: User = this.signUpForm.value;
    this.authService.signUp(userData).subscribe({
      next: () => {
        this.message = 'User registered successfully!';
        console.log(this.message);
        this.signUpForm.reset();
      },
      error: (error: HttpErrorResponse) => {
        this.message = 'Sign-up failed!';
        console.error(error);
      }
    });
  }

  /**
   * Handle social login/sign-up
   * @param provider - The social media provider name
   */
  onSocialLogin(provider: string): void {
    const externalUserID = `social_${provider}_${new Date().getTime()}`;

    this.signUpForm.patchValue({
      userName: externalUserID,
      email: `${externalUserID}@social.com`,
      password: externalUserID,
      isExternalUser: true,
      externalUserID: externalUserID
    });

    this.onSignUpSubmit();
  }
}
