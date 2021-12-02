import { useContext, useEffect, useState } from 'react';
import {
  IonAvatar,
  IonButton,
  IonCol,
  IonGrid,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonRow,
  IonText,
  useIonToast,
} from '@ionic/react';
import {
  callOutline,
  logOut,
  mailOutline,
  maleOutline,
  mapOutline,
} from 'ionicons/icons';

import Layout from 'components/layout';
import { AuthContext } from 'contexts/auth';
import { getUserData } from 'services/firebase';
import { UserData } from 'types/userData';
import { useHistory } from 'react-router';

const initialData: UserData = {
  id: '1',
  fullName: 'John Doe',
  gender: 'male',
  email: 'example@domain.com',
  phoneNumber: '12345',
  address: 'USA',
};

const Profile: React.FC = () => {
  const [userData, setUserData] = useState<UserData>(initialData);
  const { currentUser, logout } = useContext(AuthContext);
  const [presentToast] = useIonToast();
  const history = useHistory();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const data = await getUserData(currentUser);

        if (!data) return;

        setUserData(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchUserData();
  }, [currentUser]);

  const handleLogout = async () => {
    try {
      await logout();

      presentToast({
        message: 'Anda telah keluar.',
        duration: 2000,
        color: 'danger',
      });

      history.replace('/login');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Layout title="Profil Saya">
      <IonGrid>
        <IonRow className="ion-margin-vertical">
          <IonCol>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <IonAvatar
                style={{
                  width: '100px',
                  height: '100px',
                  margin: '0 18px',
                  border: '2px solid var(--ion-color-danger)',
                }}
              >
                <img src="https://i.pravatar.cc/300?img=13" alt="avatar" />
              </IonAvatar>
              <IonText
                style={{
                  borderLeft: '2px solid var(--ion-color-dark)',
                  paddingLeft: '18px',
                }}
              >
                <h3 style={{ fontWeight: 'bold' }}>
                  <IonText color="danger">{userData.fullName}</IonText>
                </h3>
                <p>Hello World</p>
              </IonText>
            </div>
          </IonCol>
        </IonRow>

        <IonRow>
          <IonCol>
            <IonButton
              shape="round"
              expand="block"
              color="primary"
              routerLink="/edit-profile"
            >
              Edit Profil
            </IonButton>
          </IonCol>
        </IonRow>

        <IonRow className="ion-margin-vertical">
          <IonCol>
            <IonList>
              <IonItem>
                <IonIcon icon={maleOutline} slot="start" color="primary" />
                <IonLabel>
                  {userData.gender === 'male' ? 'Laki-Laki' : 'Perempuan'}
                </IonLabel>
              </IonItem>

              <IonItem>
                <IonIcon icon={mailOutline} slot="start" color="primary" />
                <IonLabel>{userData.email}</IonLabel>
              </IonItem>

              <IonItem>
                <IonIcon icon={callOutline} slot="start" color="primary" />
                <IonLabel>{userData.phoneNumber}</IonLabel>
              </IonItem>

              <IonItem>
                <IonIcon icon={mapOutline} slot="start" color="primary" />
                <IonLabel>{userData.address}</IonLabel>
              </IonItem>
            </IonList>
          </IonCol>
        </IonRow>

        <IonRow className="ion-margin-vertical ion-text-center">
          <IonCol>
            <IonButton
              fill="outline"
              shape="round"
              expand="block"
              color="danger"
              onClick={handleLogout}
            >
              <IonIcon icon={logOut} slot="start" />
              <IonLabel>Keluar</IonLabel>
            </IonButton>
          </IonCol>
        </IonRow>
      </IonGrid>
    </Layout>
  );
};

export default Profile;
