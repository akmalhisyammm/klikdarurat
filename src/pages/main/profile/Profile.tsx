import { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
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
  useIonLoading,
  useIonToast,
} from '@ionic/react';
import {
  callOutline,
  logOut,
  mailOutline,
  maleOutline,
  mapOutline,
} from 'ionicons/icons';

import { AuthContext } from 'contexts/auth';
import { UserDataContext } from 'contexts/userData';
import Layout from 'components/layout';

import styles from 'styles/main/profile/Profile.module.scss';

const Profile: React.FC = () => {
  const { currentUser, logout } = useContext(AuthContext);
  const { userData, fetchUserData } = useContext(UserDataContext);
  const [presentToast] = useIonToast();
  const [presentLoading, dismissLoading] = useIonLoading();
  const history = useHistory();

  useEffect(() => {
    const getUserData = async () => {
      presentLoading({ spinner: 'bubbles', cssClass: 'loading' });

      try {
        await fetchUserData(currentUser);
      } catch (error) {
        console.error(error);
      }

      dismissLoading();
    };

    getUserData();
    console.log('hihih');
  }, [currentUser, presentLoading, dismissLoading]);

  const handleLogout = async () => {
    console.log('start');
    try {
      await logout();

      presentToast({
        message: 'Anda telah keluar.',
        duration: 2000,
        color: 'danger',
      });

      history.replace('/login');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Layout title="Profil Saya">
      <IonGrid>
        <IonRow className="ion-margin-vertical">
          <IonCol>
            <div className={styles.contentHeader}>
              <IonAvatar className={styles.profileAvatar}>
                <img src={(userData.photoUrl) ? userData.photoUrl : './assets/images/avatar-placeholder.png'} alt="avatar" />
              </IonAvatar>
              <IonText className={styles.rightHeader}>
                <h3 className={styles.profileName}>
                  <IonText color="danger">{userData.fullName}</IonText>
                </h3>
                <p>{(userData.bio) ? userData.bio : 'Bio'}</p>
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
                <IonLabel>{(userData.address) ? userData.address : 'Alamat'}</IonLabel>
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
