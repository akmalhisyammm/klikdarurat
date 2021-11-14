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
import { personOutline, mailOutline, lockClosedOutline } from 'ionicons/icons';

const Register: React.FC = () => {
  const handleRegisterClick = () => {
    console.log("Register button clicked!");
  };

  return (
    <IonPage>
      <IonContent color="secondary">
        <IonGrid style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          height: '100%'
        }}>

          <IonCard className="ion-text-center">
            <IonCardHeader>
              <h1 style={{ fontWeight: 'bold' }}>
                <IonText color="secondary">Daftar</IonText>
              </h1>
            </IonCardHeader>

            <IonCardContent>
              <IonRow>
                <IonCol>
                  <IonList>
                    <IonItem>
                      <IonIcon icon={personOutline} color="secondary" slot="start" />
                      <IonInput placeholder="Masukkan nama" />
                    </IonItem>
                    <IonItem>
                      <IonIcon icon={mailOutline} color="secondary" slot="start" />
                      <IonInput placeholder="Masukkan email" />
                    </IonItem>
                    <IonItem>
                      <IonIcon icon={lockClosedOutline} color="secondary" slot="start" />
                      <IonInput placeholder="Masukkan kata sandi" />
                    </IonItem>
                  </IonList>
                </IonCol>
              </IonRow>

              <IonRow>
                <IonCol>
                  <IonButton color="secondary" expand="block" shape="round" onClick={handleRegisterClick}>Daftar</IonButton>
                </IonCol>
              </IonRow>

              <IonRow>
                <IonCol>
                  <IonLabel>
                    Sudah memiliki akun?
                    <IonRouterLink color="secondary" routerLink="/login" rel="noopener noreferrer"> Masuk sekarang.</IonRouterLink>
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

export default Register;
