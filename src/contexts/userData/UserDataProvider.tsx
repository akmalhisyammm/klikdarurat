import { ReactNode, useContext, useEffect, useState } from 'react';
import { useIonLoading } from '@ionic/react';
import { base64FromPath } from '@capacitor-community/filesystem-react';
import { UserData } from 'types/userData';
import { AuthContext } from 'contexts/auth';
import { getUserData, updateUserData } from 'services/firebase.service';
import { UserDataContext } from './userData.context';

type UserDataProviderProps = {
  children: ReactNode;
};

const initialUser: UserData = {
  id: '1',
  fullName: 'John Doe',
  gender: 'male',
  email: 'john.doe@example.com',
  phoneNumber: '12345',
  address: 'USA',
  bio: '',
  photoUrl: ''
};

export const UserDataProvider: React.FC<UserDataProviderProps> = ({
  children
}: UserDataProviderProps) => {
  const [userData, setUserData] = useState<UserData>(initialUser);
  const [startFetchData, setStartFetchData] = useState<boolean>(true);

  const [presentLoading, dismissLoading] = useIonLoading();

  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const data = await getUserData(currentUser);

        if (!data) return;

        setUserData(data);
      } catch (err) {
        console.log(err);
        throw new Error('Oops! Something went wrong.');
      }
    };

    fetchUserData();
    setStartFetchData(false);
  }, [currentUser, startFetchData]);

  const editUserData = async (updatedUser: UserData, photo: string) => {
    presentLoading({ spinner: 'bubbles', cssClass: 'loading' });

    try {
      const base64 = await base64FromPath(photo);
      await updateUserData(currentUser, updatedUser, base64, photo);

      setStartFetchData(true);
    } catch (err) {
      console.error(err);
      throw new Error('Oops! Something went wrong.');
    }

    dismissLoading();
  };

  return (
    <UserDataContext.Provider value={{ userData, editUserData }}>
      {children}
    </UserDataContext.Provider>
  );
};
