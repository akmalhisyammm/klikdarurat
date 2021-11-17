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
  IonList,
  IonPage,
  IonRouterLink,
  IonRow,
  IonText,
} from '@ionic/react';
import { klikDarurat } from 'assets';
import { personOutline, mailOutline, lockClosedOutline } from 'ionicons/icons';

const Register: React.FC = () => {
  const handleRegisterClick = () => {
    console.log('Register button clicked!');
  };

  return (
    <IonPage>
      <IonContent
        className="ion-text-center"
        style={{
          '--background':
            'linear-gradient(135deg, rgba(224,108,120,1) 35%, rgba(250,146,132,1) 100%)',
        }}
      >
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
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <span style={{ paddingTop: '4px' }}>
                  <img src={klikDarurat} alt="logo" width="40" />
                </span>
                &ensp;
                <h1
                  style={{
                    margin: 'auto 0',
                    fontWeight: 'bold',
                    color: '#ffffff',
                  }}
                >
                  KlikDarurat
                </h1>
              </div>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol>
              <IonCard style={{ margin: '8px 0', borderRadius: '18px' }}>
                <IonCardHeader>
                  <h1 style={{ fontWeight: 'bold' }}>
                    <IonText color="dark">Daftar</IonText>
                  </h1>
                </IonCardHeader>
                <IonCardContent>
                  <IonRow>
                    <IonCol>
                      <IonList>
                        <IonItem>
                          <IonIcon
                            icon={personOutline}
                            color="secondary"
                            slot="start"
                          />
                          <IonInput placeholder="Nama Lengkap" />
                        </IonItem>
                        <IonItem>
                          <IonIcon
                            icon={mailOutline}
                            color="secondary"
                            slot="start"
                          />
                          <IonInput placeholder="Email" />
                        </IonItem>
                        <IonItem>
                          <IonIcon
                            icon={lockClosedOutline}
                            color="secondary"
                            slot="start"
                          />
                          <IonInput placeholder="Kata Sandi" />
                        </IonItem>
                        <IonItem>
                          <IonIcon
                            icon={lockClosedOutline}
                            color="secondary"
                            slot="start"
                          />
                          <IonInput placeholder="Ulangi Kata Sandi" />
                        </IonItem>
                      </IonList>
                    </IonCol>
                  </IonRow>

                  <IonRow className="ion-margin-bottom">
                    <IonCol>
                      <IonButton
                        color="secondary"
                        expand="block"
                        shape="round"
                        onClick={handleRegisterClick}
                      >
                        Daftar
                      </IonButton>
                    </IonCol>
                  </IonRow>
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol>
              <IonText style={{ color: '#ffffff' }}>
                Sudah memiliki akun?{' '}
                <IonRouterLink
                  color="primary"
                  routerLink="/login"
                  style={{
                    fontWeight: 'bold',
                    textDecoration: 'underline',
                  }}
                >
                  Masuk
                </IonRouterLink>
              </IonText>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Register;
