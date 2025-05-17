import { Injectable, inject } from '@angular/core';
import { 
  Auth, 
  signInWithPopup, 
  GoogleAuthProvider, 
  FacebookAuthProvider, 
  TwitterAuthProvider, 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword, 
  signOut, 
  User, 
  onAuthStateChanged 
} from '@angular/fire/auth';
import { Firestore, collection, doc, setDoc, getDocs, query, where, updateDoc, increment } from '@angular/fire/firestore';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private auth = inject(Auth);
  private firestore = inject(Firestore);
  private userSubject = new BehaviorSubject<User | null>(null);
  user$ = this.userSubject.asObservable();

  constructor() {
    onAuthStateChanged(this.auth, async (user) => {
      this.userSubject.next(user);
      if (user) {
        await this.logUserActivity(user.uid);
      }
    });
  }

  async loginWithEmail(email: string, password: string) {
    const userCredential = await signInWithEmailAndPassword(this.auth, email, password);
    await this.logUserActivity(userCredential.user.uid);
    return userCredential;
  }

  async registerWithEmail(email: string, password: string) {
    const userCredential = await createUserWithEmailAndPassword(this.auth, email, password);
    await this.logUserActivity(userCredential.user.uid);
    return userCredential;
  }

  async loginWithGoogle() {
    return await signInWithPopup(this.auth, new GoogleAuthProvider());
  }

  async loginWithFacebook() {
    const userCredential = await signInWithPopup(this.auth, new FacebookAuthProvider());
    await this.logUserActivity(userCredential.user.uid);
    return userCredential;
  }

  async loginWithTwitter() {
    const userCredential = await signInWithPopup(this.auth, new TwitterAuthProvider());
    await this.logUserActivity(userCredential.user.uid);
    return userCredential;
  }

  async logout() {
    return signOut(this.auth);
  }

  /**
   * Logs user activity in Firestore.
   */
  private async logUserActivity(userId: string) {
    const today = new Date().toISOString().split('T')[0]; // YYYY-MM-DD format
    const activityRef = doc(this.firestore, `userActivity/${userId}_${today}`);

    try {
      await setDoc(activityRef, { userId, date: today, count: 0 }, { merge: true });
      await updateDoc(activityRef, { count: increment(1) }); // Increment activity count
    } catch (error) {
      console.error('Error logging user activity:', error);
    }
  }

  /**
   * Fetches user activity for the last 5 days.
   */
  async getUserActivity(userId: string) {
    const activityRef = collection(this.firestore, 'userActivity');
    const q = query(activityRef, where('userId', '==', userId));
    const snapshot = await getDocs(q);

    const activityMap: { [key: string]: number } = {};
    const today = new Date();
    const pastDays = 5;

    snapshot.forEach(doc => {
      const data = doc.data();
      const date = data['date'];

      const activityDate = new Date(date);
      const diffDays = Math.floor((today.getTime() - activityDate.getTime()) / (1000 * 60 * 60 * 24));

      if (diffDays <= pastDays) { // Only store last 5 days' activity
        activityMap[date] = (activityMap[date] || 0) + data['count'];
      }
    });

    return Object.entries(activityMap).map(([date, count]) => ({ name: date, value: count }));
  }

  /**
   * Get User Data and Activity
   */
  async getUserData() {
    const user = this.userSubject.value;
    if (user) {
      const activity = await this.getUserActivity(user.uid);
      return { user, activity };
    }
    return null;
  }
}
