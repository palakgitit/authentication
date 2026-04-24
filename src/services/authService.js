import { 
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  sendPasswordResetEmail,
  signOut
} from "firebase/auth";

import { auth, googleProvider, githubProvider, facebookProvider } from "../firebase/firebase";

// Register
export const registerUser = (email, password) =>
  createUserWithEmailAndPassword(auth, email, password);

// Login
export const loginUser = (email, password) =>
  signInWithEmailAndPassword(auth, email, password);

// Social Login
export const googleLogin = () =>
  signInWithPopup(auth, googleProvider);

export const githubLogin = () =>
  signInWithPopup(auth, githubProvider);

export const facebookLogin = () =>
  signInWithPopup(auth, facebookProvider);

// Reset Password
export const resetPassword = (email) =>
  sendPasswordResetEmail(auth, email);

// Logout
export const logoutUser = () => signOut(auth);