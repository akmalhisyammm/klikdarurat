import { useState } from 'react';
import { User } from 'firebase/auth';
import { UserDataContext } from './userData.context';
import { UserData } from 'types/userData';
import { getUserData } from 'services/firebase.service';

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

export const UserDataProvider: React.FC = ({ children }) => {
  const [userData, setUserData] = useState<UserData>(initialData);

  const fetchUserData = async (currentUser: User | null) => {
    try {
      const data = await getUserData(currentUser);

      if (!data) return;

      setUserData(data);
    } catch (error) {
      console.log(error);
      throw new Error('Oops! Something went wrong.');
    }
  };

  return (
    <UserDataContext.Provider value={{ userData, fetchUserData }}>
      {children}
    </UserDataContext.Provider>
  );
};
