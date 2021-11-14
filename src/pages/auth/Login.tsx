import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCol,
  IonContent,
  IonGrid,
  IonIcon,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonRouterLink,
  IonRow,
  IonText
} from '@ionic/react';
import { mailOutline, lockClosedOutline } from 'ionicons/icons';

const Login: React.FC = () => {
  const handleLoginClick = () => {
    console.log("Login button clicked!");
  };

  return (
    <IonPage>
      <IonContent color="primary">
        <IonGrid style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          height: '100%'
        }}>

          <IonCard className="ion-text-center">
            <IonCardHeader>
              <h1 style={{ fontWeight: 'bold' }}>
                <IonText color="primary">Masuk</IonText>
              </h1>
            </IonCardHeader>

            <IonCardContent>
              <IonRow>
                <IonCol>
                  <IonList>
                    <IonItem>
                      <IonIcon icon={mailOutline} color="primary" slot="start" />
                      <IonInput placeholder="Masukkan email" />
                    </IonItem>
                    <IonItem>
                      <IonIcon icon={lockClosedOutline} color="primary" slot="start" />
                      <IonInput placeholder="Masukkan kata sandi" />
                    </IonItem>
                  </IonList>
                </IonCol>
              </IonRow>

              <IonRow>
                <IonCol>
                  <IonButton color="primary" expand="block" shape="round" onClick={handleLoginClick}>Masuk</IonButton>
                </IonCol>
              </IonRow>

              <IonRow>
                <IonCol>
                  <IonLabel>
                    Tidak memiliki akun?
                    <IonRouterLink color="primary" routerLink="/register" rel="noopener noreferrer"> Daftar sekarang.</IonRouterLink>
                  </IonLabel>
                </IonCol>
              </IonRow>
            </IonCardContent>
          </IonCard>

        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Login;
