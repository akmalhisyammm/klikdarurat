import {
  IonButton,
  IonCol,
  IonContent,
  IonGrid,
  IonIcon,
  IonPage,
  IonRouterLink,
  IonRow,
  IonText,
} from '@ionic/react';
import { emergencyCall } from 'assets';
import { openOutline } from 'ionicons/icons';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonContent className="ion-text-center">
        <IonGrid
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            height: '100%',
          }}
        >
          <IonRow>
            <IonCol>
              <h1>
                Selamat Datang di <IonText color="danger">KlikDarurat</IonText>
              </h1>
            </IonCol>
          </IonRow>
          <IonRow className="ion-margin-vertical">
            <IonCol>
              <img src={emergencyCall} alt="emergency call" width="70%" />
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonButton
                shape="round"
                expand="block"
                color="primary"
                routerLink="/login"
              >
                Masuk
              </IonButton>
              <IonButton
                shape="round"
                expand="block"
                color="secondary"
                routerLink="/register"
              >
                Daftar
              </IonButton>
            </IonCol>
          </IonRow>
          <IonRow className="ion-margin-vertical">
            <IonCol>
              <IonRouterLink color="danger" routerLink="/about">
                Tentang Kami <IonIcon icon={openOutline} />
              </IonRouterLink>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Home;
