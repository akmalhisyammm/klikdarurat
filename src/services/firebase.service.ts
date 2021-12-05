import { getApp, getApps, initializeApp, FirebaseError } from 'firebase/app';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendEmailVerification,
  signOut,
  User,
  sendPasswordResetEmail,
} from 'firebase/auth';
import {
  getFirestore,
  collection,
  doc,
  updateDoc,
  setDoc,
  getDoc,
  getDocs,
  deleteDoc,
  query,
  where,
} from 'firebase/firestore';
import { getStorage, getDownloadURL, ref, uploadBytes } from 'firebase/storage';

import firebaseConfig from 'config/firebase.config';
import { PersonalContactData } from 'types/personalContact';
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
  gender: 'male' | 'female',
  bio: string,
  photoUrl: string
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
      bio,
      photoUrl,
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
  } catch (error) {
    console.error(error);

    if (error instanceof FirebaseError) {
      throw new Error(error.code);
    }

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
    gender: 'male' | 'female';
    email: string;
    phoneNumber: string;
    address: string;
    bio: string;
    photoUrl: string;
  },
  base64: string,
  photo: string
) => {
  if (!currentUser) throw new Error('Current user is null.');

  const photoName = currentUser.uid + '.jpeg';
  const storageRef = ref(storage, `assets/profile-pictures/${photoName}`);

  try {
    if (photo) {
      const photoBlob = await (await fetch(base64)).blob();

      await uploadBytes(storageRef, photoBlob);

      const photoUrl = await getDownloadURL(storageRef);
      updatedUser.photoUrl = photoUrl;
    }

    const usersDocRef = doc(firestore, 'users', currentUser.uid);
    await updateDoc(usersDocRef, updatedUser);
  } catch (err) {
    console.error(err);
    throw new Error('Oops! Something went wrong.');
  }
};

const requestPasswordReset = async (email: string) => {
  try {
    await sendPasswordResetEmail(firebaseAuth, email);
  } catch (err) {
    console.error(err);
    throw new Error('Oops! Something went wrong.');
  }
};

const getPersonalContacts = async (currentUser: User | null) => {
  if (!currentUser) return;

  try {
    const contactsSubColRef = collection(
      firestore,
      'users',
      currentUser.uid,
      'contacts'
    );
    const q = query(contactsSubColRef, where('name', '!=', 'EMPTY_RESERVED'));
    const qSnap = await getDocs(q);

    return qSnap.docs.map((doc) => ({
      ...(doc.data() as PersonalContactData),
    }));
  } catch (error) {
    console.error(error);
    throw new Error('Oops! Something went wrong.');
  }
};

const addPersonalContact = async (
  currentUser: User | null,
  name: string,
  phoneNumber: string
) => {
  if (!currentUser) throw new Error('Current user is null.');

  try {
    const docRef = doc(
      collection(firestore, 'users', currentUser.uid, 'contacts')
    );
    const newContact = {
      id: docRef.id,
      name,
      phoneNumber,
    };

    await setDoc(docRef, newContact);

    return newContact as PersonalContactData;
  } catch (error) {
    console.error(error);
    throw new Error('Oops! Something went wrong.');
  }
};

const editPersonalContact = async (
  currentUser: User | null,
  id: string,
  name: string,
  phoneNumber: string
) => {
  if (!currentUser) throw new Error('Current user is null.');

  try {
    const updatedContact = {
      id,
      name,
      phoneNumber,
    };

    await updateDoc(
      doc(firestore, 'users', currentUser.uid, 'contacts', id),
      updatedContact
    );

    // Get all documents from contacts subcollection
    const contactsSubColRef = collection(
      firestore,
      'users',
      currentUser.uid,
      'contacts'
    );
    const q = query(contactsSubColRef, where('name', '!=', 'EMPTY_RESERVED'));
    const qSnap = await getDocs(q);

    return qSnap.docs.map((doc) => ({
      ...(doc.data() as PersonalContactData),
    }));
  } catch (error) {
    console.error(error);
    throw new Error('Oops! Something went wrong.');
  }
};

const deletePersonalContact = async (currentUser: User | null, id: string) => {
  if (!currentUser) throw new Error('Current user is null.');

  try {
    // Delete document in contacts subcollection
    const docRef = doc(firestore, 'users', currentUser.uid, 'contacts', id);
    await deleteDoc(docRef);

    // Get all documents from contacts subcollection
    const contactsSubColRef = collection(
      firestore,
      'users',
      currentUser.uid,
      'contacts'
    );
    const q = query(contactsSubColRef, where('name', '!=', 'EMPTY_RESERVED'));
    const qSnap = await getDocs(q);

    return qSnap.docs.map((doc) => ({
      ...(doc.data() as PersonalContactData),
    }));
  } catch (error) {
    console.error(error);
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
  requestPasswordReset,
  getPersonalContacts,
  addPersonalContact,
  editPersonalContact,
  deletePersonalContact,
};
