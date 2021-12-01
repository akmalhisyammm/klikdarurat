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
} from '@ionic/react';
import {
  callOutline,
  logOut,
  mailOutline,
  maleOutline,
  mapOutline,
} from 'ionicons/icons';

import Layout from 'components/layout';
import { useContext } from 'react';
import { AuthContext } from 'contexts/auth';

const Profile: React.FC = () => {
  const { currentUser } = useContext(AuthContext);

  console.log(currentUser?.fullName);

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
                  <IonText color="danger">{currentUser?.fullName}</IonText>
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
                <IonLabel>{currentUser?.gender}</IonLabel>
              </IonItem>

              <IonItem>
                <IonIcon icon={mailOutline} slot="start" color="primary" />
                <IonLabel>{currentUser?.email}</IonLabel>
              </IonItem>

              <IonItem>
                <IonIcon icon={callOutline} slot="start" color="primary" />
                <IonLabel>{currentUser?.phoneNumber}</IonLabel>
              </IonItem>

              <IonItem>
                <IonIcon icon={mapOutline} slot="start" color="primary" />
                <IonLabel>{currentUser?.address}</IonLabel>
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
              routerLink="/"
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
