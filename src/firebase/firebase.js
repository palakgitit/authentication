import { initializeApp } from "firebase/app";
import { 
  getAuth, 
  GoogleAuthProvider,
  GithubAuthProvider,
  FacebookAuthProvider 
} from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyDyaeH_oiQW1V7-iEbqtMsPZ4WFlpkd3pc",
  authDomain: "auth-app-42a44.firebaseapp.com",
  projectId: "auth-app-42a44",
  storageBucket: "auth-app-42a44.firebasestorage.app",
  messagingSenderId: "103753701710",
  appId: "1:103753701710:web:d2e3c008a563a2f7e5261f",
  measurementId: "G-FBVNFBCBG7"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const googleProvider = new GoogleAuthProvider();
export const githubProvider = new GithubAuthProvider();
export const facebookProvider = new FacebookAuthProvider();