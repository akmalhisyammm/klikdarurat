import { createContext } from 'react';
import { UserData } from 'types/userData';

const initialUser: UserData = {
  id: '1',
  fullName: 'John Doe',
  gender: 'male',
  email: 'john.doe@example.com',
  phoneNumber: '12345',
  address: 'USA',
  bio: '',
  photoUrl: '',
};

interface Context {
  userData: UserData;
  editUserData: (updatedUser: UserData, photo: string) => void;
}

export const UserDataContext = createContext<Context>({
  userData: initialUser,
  editUserData: () => {},
});
