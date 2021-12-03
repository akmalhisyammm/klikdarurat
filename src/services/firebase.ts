import { getApp, getApps, initializeApp } from 'firebase/app';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendEmailVerification,
  signOut,
  User,
} from 'firebase/auth';
import {
  getFirestore,
  collection,
  addDoc,
  doc,
  setDoc,
  getDoc,
  updateDoc,
} from 'firebase/firestore';
import { getStorage, getDownloadURL, ref, uploadBytes } from 'firebase/storage';

import firebaseConfig from 'config/firebase.config';
import { UserData } from 'types/userData';

const firebaseApp = getApps().length ? getApp() : initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp);
const firestore = getFirestore(firebaseApp);
const storage = getStorage(firebaseApp);

const usersCollection = collection(firestore, 'users');

const registerUser = async (
  email: string,
  password: string,
  fullName: string,
  phoneNumber: string,
  address: string,
  gender: 'male' | 'female'
) => {
  try {
    const { user } = await createUserWithEmailAndPassword(
      firebaseAuth,
      email,
      password
    );

    await setDoc(doc(usersCollection, user.uid), {
      id: user.uid,
      email,
      fullName,
      phoneNumber,
      address,
      gender,
    });

    await setDoc(
      doc(firestore, 'users', user.uid, 'contacts', 'EMPTY_RESERVED'),
      {
        name: 'EMPTY_RESERVED',
      }
    );

    await sendEmailVerification(user);
  } catch (err) {
    console.error(err);
    throw new Error('Oops! Something went wrong.');
  }
};

const loginUser = async (email: string, password: string) => {
  try {
    const { user } = await signInWithEmailAndPassword(
      firebaseAuth,
      email,
      password
    );

    if (user.emailVerified) {
      return { status: true, message: 'login_success' };
    } else {
      return { status: false, message: 'email_not_verified' };
    }
  } catch (err) {
    console.error(err);
    throw new Error('Oops! Something went wrong.');
  }
};

const logoutUser = async () => {
  try {
    await signOut(firebaseAuth);
  } catch (err) {
    console.error(err);
    throw new Error('Oops! Something went wrong.');
  }
};

const getUserData = async (currentUser: User | null) => {
  if (currentUser) {
    try {
      const usersDocRef = doc(firestore, 'users', currentUser.uid);
      const docSnap = await getDoc(usersDocRef);

      if (!docSnap.exists()) {
        return;
      }

      return docSnap.data() as UserData;
    } catch (err) {
      console.error(err);
      throw new Error('Oops! Something went wrong.');
    }
  }
};

const updateUserData = async (
  currentUser: User | null,
  updatedUser: {
    fullName: string;
    gender: string;
    email: string;
    phoneNumber: string;
    address: string;
  }
) => {
  if (!currentUser) return;

  try {
    const usersDocRef = doc(firestore, 'users', currentUser.uid);
    await updateDoc(usersDocRef, updatedUser);
  } catch (err) {
    console.error(err);
    throw new Error('Oops! Something went wrong.');
  }
};

export {
  firebaseAuth,
  registerUser,
  loginUser,
  logoutUser,
  getUserData,
  updateUserData,
};
