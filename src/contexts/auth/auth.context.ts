import { createContext } from 'react';
import { User } from 'firebase/auth';
import { UserData } from 'types/userData';

interface Context {
  currentUser: User | null;
  register: (
    email: string,
    password: string,
    fullName: string,
    phoneNumber: string,
    address: string,
    gender: 'male' | 'female'
  ) => void;
  login: (email: string, password: string) => void;
  logout: () => void;
}

export const AuthContext = createContext<Context>({
  currentUser: null,
  register: () => {},
  login: () => {},
  logout: () => {},
});
