import { getApp, getApps, initializeApp } from 'firebase/app';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendEmailVerification,
  signOut,
} from 'firebase/auth';
import {
  getFirestore,
  collection,
  addDoc,
  doc,
  setDoc,
  getDoc,
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
  } catch (error) {
    console.error(error);
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
  } catch (error) {
    console.error(error);
    throw new Error('Oops! Something went wrong.');
  }
};

const logoutUser = async () => {
  try {
    await signOut(firebaseAuth);
  } catch (error) {
    console.error(error);
    throw new Error('Oops! Something went wrong.');
  }
};

const getUserData = async (userId: string) => {
  const usersDocRef = doc(firestore, 'users', userId);
  const user = await getDoc(usersDocRef);

  if (!user.exists()) return;

  return { ...(user.data() as UserData), id: user.id };
};

export { firebaseAuth, registerUser, loginUser, logoutUser, getUserData };
