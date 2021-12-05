import { createContext } from 'react';
import { User } from 'firebase/auth';
import { UserData } from 'types/userData';

const initialData: UserData = {
  id: '1',
  fullName: 'John Doe',
  gender: 'male',
  email: 'example@domain.com',
  phoneNumber: '12345',
  address: 'USA',
  bio: '',
  photoUrl: '',
};

interface Context {
  userData: UserData;
  fetchUserData: (currentUser: User | null) => void;
}

export const UserDataContext = createContext<Context>({
  userData: initialData,
  fetchUserData: () => { },
});