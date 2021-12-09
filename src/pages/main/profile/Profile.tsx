import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { IonButton, IonCol, IonGrid, IonIcon, IonLabel, IonRow, useIonToast } from '@ionic/react';
import { logOut } from 'ionicons/icons';

import { AuthContext } from 'contexts/auth';
import { ProfileDetail, ProfileHighlight } from 'components/pages/main/Profile';
import Layout from 'components/layout';

const Profile: React.FC = () => {
  const [presentToast] = useIonToast();
  const { logout } = useContext(AuthContext);

  const history = useHistory();

  const handleLogout = async () => {
    try {
      await logout();

      presentToast({
        message: 'Anda telah keluar.',
        duration: 2000,
        color: 'danger'
      });

      history.replace('/login');
    } catch (err) {
      // console.error(err);
    }
  };

  return (
    <Layout title="Profil Saya">
      <IonGrid>
        <IonRow className="ion-margin-vertical">
          <IonCol>
            <ProfileHighlight />
          </IonCol>
        </IonRow>

        <IonRow>
          <IonCol>
            <IonButton shape="round" expand="block" color="primary" routerLink="/edit-profile">
              Edit Profil
            </IonButton>
          </IonCol>
        </IonRow>

        <IonRow className="ion-margin-vertical">
          <IonCol>
            <ProfileDetail />
          </IonCol>
        </IonRow>

        <IonRow className="ion-margin-vertical ion-text-center">
          <IonCol>
            <IonButton
              fill="outline"
              shape="round"
              expand="block"
              color="danger"
              onClick={handleLogout}>
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
