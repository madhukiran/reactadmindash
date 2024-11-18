import { FirebaseOptions, initializeApp } from 'firebase/app';
import { getAuth, connectAuthEmulator } from 'firebase/auth';

// let { VITE_FIREBASE_CONFIG, PROD } = import.meta.env;

let { VITE_FIREBASE_CONFIG } = import.meta.env;

// const firebaseConfig: FirebaseOptions = VITE_FIREBASE_CONFIG
//   ? JSON.parse(VITE_FIREBASE_CONFIG)
//   : {
//     apiKey:"AIzaSyBD6coSWr38VBqxpAUXAL_jXkCeHHkHjdE",
//     authDomain:"adminlte-c25b1.firebaseapp.com",
//     projectId:"adminlte-c25b1",
//     storageBucket:"adminlte-c25b1.firebasestorage.app",
//     messagingSenderId:"531636345361",
//     appId:"1:531636345361:web:1d06efad4a12a840616fb0",
// };

const firebaseConfig: FirebaseOptions = {
    apiKey:"AIzaSyBD6coSWr38VBqxpAUXAL_jXkCeHHkHjdE",
    authDomain:"adminlte-c25b1.firebaseapp.com",
    projectId:"adminlte-c25b1",
    storageBucket:"adminlte-c25b1.firebasestorage.app",
    messagingSenderId:"531636345361",
    appId:"1:531636345361:web:1d06efad4a12a840616fb0",
};

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const firebaseAuth = getAuth(app);

// if (!PROD) {
//   connectAuthEmulator(firebaseAuth, 'http://localhost:9099');
// }

connectAuthEmulator(firebaseAuth, 'http://localhost:9099');