// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { 
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider
} from 'firebase/auth';

import {
  getFirestore,
  doc,
  getDoc,
  setDoc
} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyARGcOGbAEjEfH5gz6Y_o4zWxgFD5lMdOA",
  authDomain: "ecomm-db-tut.firebaseapp.com",
  projectId: "ecomm-db-tut",
  storageBucket: "ecomm-db-tut.appspot.com",
  messagingSenderId: "1058542597243",
  appId: "1:1058542597243:web:a93560e447a5c540931ede"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider)
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider)


export const db = getFirestore();

export const createUserDocFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid);
  console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef);
  // console.log(userSnapshot);
  // console.log(userSnapshot.exists());

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName, 
        email,
        createdAt
      });
    } catch (error) {
      console.log('Error creating user', error.message);
    }

  }

  return userDocRef;

  // console.log(userSnapshot.data());
}