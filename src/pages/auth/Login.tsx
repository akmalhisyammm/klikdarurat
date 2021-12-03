import React, { useRef, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCol,
  IonGrid,
  IonIcon,
  IonInput,
  IonItem,
  IonList,
  IonRouterLink,
  IonRow,
  IonText,
  useIonLoading,
  useIonToast,
} from '@ionic/react';
import { klikDarurat } from 'assets';
import { mailOutline, lockClosedOutline } from 'ionicons/icons';

import { AuthContext } from 'contexts/auth';
import Layout from 'components/layout';

const Login: React.FC = () => {
  const [presentLoading, dismissLoading] = useIonLoading();
  const [presentToast] = useIonToast();

  const emailRef = useRef<HTMLIonInputElement>(null);
  const passwordRef = useRef<HTMLIonInputElement>(null);

  const { login } = useContext(AuthContext);

  const history = useHistory();

  const handleLoginClick = async () => {
    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;

    if (!email || !password) {
      return presentToast({
        message: 'Email dan kata sandi wajib diisi',
        duration: 2000,
        color: 'warning',
      });
    }

    presentLoading();

    try {
      await login(email.toString(), password.toString());

      history.replace('/main');
    } catch (error) {
      if (error instanceof Error) {
        if (error.message === 'email_not_verified') {
          dismissLoading();

          presentToast({
            message: 'Harap verifikasi email anda',
            duration: 2000,
            color: 'warning',
          });
        }
        return;
      } else {
        return presentToast({
          message: 'Gagal untuk masuk',
          duration: 2000,
          color: 'warning',
        });
      }
    }

    dismissLoading();
  };

  return (
    <Layout>
      <div
        style={{
          width: '100%',
          height: '100%',
          background:
            'linear-gradient(135deg, rgba(224,108,120,1) 0%, rgba(88,116,220,1) 60%, rgba(56,78,120,1) 100%)',
          textAlign: 'center',
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
                    <IonText color="dark">Masuk</IonText>
                  </h1>
                </IonCardHeader>
                <IonCardContent>
                  <IonRow>
                    <IonCol>
                      <IonList style={{ background: 'none' }}>
                        <IonItem style={{ '--background': 'inherit' }}>
                          <IonIcon
                            icon={mailOutline}
                            color="primary"
                            slot="start"
                          />
                          <IonInput
                            type="email"
                            inputMode="email"
                            placeholder="Email"
                            ref={emailRef}
                            required
                          />
                        </IonItem>
                        <IonItem style={{ '--background': 'inherit' }}>
                          <IonIcon
                            icon={lockClosedOutline}
                            color="primary"
                            slot="start"
                          />
                          <IonInput
                            type="password"
                            placeholder="Kata Sandi"
                            ref={passwordRef}
                            required
                          />
                        </IonItem>
                      </IonList>
                    </IonCol>
                  </IonRow>

                  <IonRow>
                    <IonCol>
                      <IonButton
                        color="primary"
                        expand="block"
                        shape="round"
                        onClick={handleLoginClick}
                      >
                        Masuk
                      </IonButton>
                    </IonCol>
                  </IonRow>

                  <IonRow className="ion-margin-vertical">
                    <IonCol>
                      <IonRouterLink
                        color="dark"
                        routerLink="/"
                        style={{
                          textDecoration: 'underline',
                        }}
                      >
                        Lupa Kata Sandi?
                      </IonRouterLink>
                    </IonCol>
                  </IonRow>
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol>
              <IonText style={{ color: '#ffffff' }}>
                Belum memiliki akun?{' '}
                <IonRouterLink
                  color="danger"
                  routerLink="/register"
                  style={{ textDecoration: 'underline' }}
                >
                  Daftar
                </IonRouterLink>
              </IonText>
            </IonCol>
          </IonRow>
        </IonGrid>
      </div>
    </Layout>
  );
};

export default Login;
