import { useState, useEffect } from 'react';
import { UserData } from 'types/userData';
import { AuthContext } from './auth.context';
import { firebaseAuth, registerUser, loginUser } from 'services/firebase';

export const AuthProvider: React.FC = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<UserData | null>(null);

  useEffect(() => {
    const unsubscribe = firebaseAuth.onAuthStateChanged((user: any) => {
      setCurrentUser(user);
      console.log("onAuthStateChanged", currentUser);
    });

    return unsubscribe;
  }, []);

  const register = async (email: string, password: string, fullName: string, phoneNumber: string, address: string, gender: 'male' | 'female') => {
    try {
      await registerUser(email, password, fullName, phoneNumber, address, gender);
    } catch (error) {
      console.error(error);
      throw new Error("Oops! Something went wrong.");
    }
  };

  const login = async (email: string, password: string) => {
    try {
      const result = await loginUser(email, password);

      if (!result.status && result.message === 'email_not_verified') {
        throw new Error("email_not_verified");
      }
    } catch (error) {
      console.error(error);

      if (error instanceof Error) {
        if (error.message === 'email_not_verified') {
          throw new Error("email_not_verified");
        }
        return;
      }

      throw new Error("Oops! Something went wrong.");
    }
  };

  return (
    <AuthContext.Provider value={{ currentUser, register, login }}>
      {children}
    </AuthContext.Provider>
  );
};
