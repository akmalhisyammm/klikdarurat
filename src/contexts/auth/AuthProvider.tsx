import { useState, useEffect } from 'react';
import { AuthContext } from './auth.context';
import { User } from 'firebase/auth';
import {
  firebaseAuth,
  registerUser,
  loginUser,
  logoutUser,
} from 'services/firebase.service';
import Loader from 'components/Loader';

export const AuthProvider: React.FC = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const unsubscribe = firebaseAuth.onAuthStateChanged((user: User | null) => {
      setCurrentUser(user);
      setLoading(false);
    });

    console.log(currentUser);

    return unsubscribe;
  }, [currentUser]);

  const register = async (
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
      await registerUser(
        email,
        password,
        fullName,
        phoneNumber,
        address,
        gender,
        bio,
        photoUrl
      );
    } catch (err) {
      console.error(err);
      throw new Error('Oops! Something went wrong.');
    }
  };

  const login = async (email: string, password: string) => {
    try {
      const result = await loginUser(email, password);

      if (!result.status && result.message === 'email_not_verified') {
        throw new Error('email_not_verified');
      }
    } catch (err) {
      console.error(err);

      if (err instanceof Error) {
        throw new Error(err.message);
      }

      throw new Error('Oops! Something went wrong.');
    }
  };

  const logout = async () => {
    try {
      await logoutUser();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <AuthContext.Provider value={{ currentUser, register, login, logout }}>
          {children}
        </AuthContext.Provider>
      )}
    </>
  );
};
