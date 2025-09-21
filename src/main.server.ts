import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { config } from './app/app.config.server';

// ✅ Import Firebase
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { firebaseConfig } from '../backend/firebase-config';

// ✅ Modify the Bootstrap function to include Firebase providers
const bootstrap = () =>
  bootstrapApplication(AppComponent, {
    ...config,
    providers: [
      provideFirebaseApp(() => initializeApp(firebaseConfig)),  // ✅ Add Firebase
      provideAuth(() => getAuth())  // ✅ Add Authentication
    ]
  });

export default bootstrap;
