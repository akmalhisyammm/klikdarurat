import { createContext } from 'react';
import { UserData } from 'types/userData';

interface Context {
  currentUser: UserData | null;
  register: (email: string, password: string, fullName: string, phoneNumber: string, address: string, gender: 'male' | 'female') => void;
  login: (email: string, password: string) => void;
}

export const AuthContext = createContext<Context>({
  currentUser: null,
  register: () => {},
  login: () => {},
});
