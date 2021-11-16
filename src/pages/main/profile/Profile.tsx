import {
  IonAvatar,
  IonButton,
  IonButtons,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonMenuButton,
  IonPage,
  IonRow,
  IonText,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import {
  callOutline,
  logOut,
  mailOutline,
  maleOutline,
  mapOutline,
} from 'ionicons/icons';

const Profile: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="danger">
          <IonTitle>Profil Saya</IonTitle>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <IonContent>
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
                    <IonText color="danger">John Doe</IonText>
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
                  <IonLabel>Laki-Laki</IonLabel>
                </IonItem>

                <IonItem>
                  <IonIcon icon={mailOutline} slot="start" color="primary" />
                  <IonLabel>john.doe@domain.com</IonLabel>
                </IonItem>

                <IonItem>
                  <IonIcon icon={callOutline} slot="start" color="primary" />
                  <IonLabel>08123456789</IonLabel>
                </IonItem>

                <IonItem>
                  <IonIcon icon={mapOutline} slot="start" color="primary" />
                  <IonLabel>Jl. Mawar No. 1</IonLabel>
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
      </IonContent>
    </IonPage>
  );
};

export default Profile;
