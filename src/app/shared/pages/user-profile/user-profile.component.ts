import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../services/DataServices/login/auth.service';
import { Router } from '@angular/router';
import { User, updateProfile } from 'firebase/auth';
import { FormsModule } from '@angular/forms';
import { Firestore, collection, query, where, getDocs } from '@angular/fire/firestore';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [CommonModule, FormsModule, NgxChartsModule],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css',
})
export class UserProfileComponent implements OnInit {
  private authService = inject(AuthService);
  private router = inject(Router);
  private firestore = inject(Firestore);
  userAvatar: string = '../../assets/Images/default-user.png'; // Default avatar
  user: User | null = null;
  editingName = false;
  newName = '';
  userActivityData: { name: string; value: number }[] = [];

  // ✅ Fix: Using a predefined color scheme from ngx-charts
  colorScheme = 'cool';

  ngOnInit() {
    this.authService.user$.subscribe(user => {
      this.user = user;
      this.newName = user?.displayName || '';
      this.userAvatar = user?.photoURL || '../../assets/images/default-user.png';
      if (user) {
        this.loadUserActivity(user.uid);
      }
    });
  }

  async loadUserActivity(userId: string) {
    const activityRef = collection(this.firestore, 'userActivity');
    const q = query(activityRef, where('userId', '==', userId));
    const snapshot = await getDocs(q);
  
    const activityMap: { [key: string]: number } = {};

    snapshot.forEach(doc => {
      const data = doc.data();
      const date = data['date'];
      activityMap[date] = (activityMap[date] || 0) + (data['count'] || 1);
    });

    // ✅ Ensure last 5 days' data is included even if missing
    this.fillMissingDates(activityMap);

    this.userActivityData = Object.entries(activityMap).map(([date, count]) => ({
      name: date,
      value: count
    }));
  }

  fillMissingDates(activityMap: { [key: string]: number }) {
    const today = new Date();
    for (let i = 0; i < 5; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() - i);
      const dateString = date.toISOString().split('T')[0];

      if (!activityMap[dateString]) {
        activityMap[dateString] = 0; // Fill missing dates with 0 activity
      }
    }
  }

  toggleEdit() {
    this.editingName = !this.editingName;
  }

  async saveName() {
    if (this.user && this.newName.trim() !== '') {
      try {
        await updateProfile(this.user, { displayName: this.newName });
        this.editingName = false;
      } catch (error) {
        console.error("Error updating name:", error);
      }
    }
  }

  goToHome() {
    this.router.navigate(['/body']);
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/']);
  }
}
