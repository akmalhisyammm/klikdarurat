import { useRef, useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonInput,
  IonItem,
  IonList,
  IonModal,
  IonRouterLink,
  IonRow,
  IonText,
  IonTitle,
  IonToolbar,
  useIonLoading,
  useIonToast,
} from '@ionic/react';
import { klikDarurat } from 'assets';
import { mailOutline, lockClosedOutline } from 'ionicons/icons';

import { requestPasswordReset } from 'services/firebase';
import { AuthContext } from 'contexts/auth';
import Layout from 'components/layout';

const Login: React.FC = () => {
  const [presentLoading, dismissLoading] = useIonLoading();
  const [presentToast] = useIonToast();

  const [isForgotPassword, setIsForgotPassword] = useState<boolean>(false);

  const emailRef = useRef<HTMLIonInputElement>(null);
  const passwordRef = useRef<HTMLIonInputElement>(null);
  const forgotPasswordEmailRef = useRef<HTMLIonInputElement>(null);

  const { login } = useContext(AuthContext);

  const history = useHistory();

  const handleLogin = async () => {
    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;

    if (!email || !password) {
      return presentToast({
        message: 'Email dan kata sandi wajib diisi.',
        duration: 2000,
        color: 'warning',
      });
    }

    presentLoading();

    try {
      await login(email.toString(), password.toString());

      history.replace('/main');
    } catch (err) {
      if (err instanceof Error) {
        if (err.message === 'email_not_verified') {
          dismissLoading();

          return presentToast({
            message: 'Harap verifikasi email Anda terlebih dahulu.',
            duration: 2000,
            color: 'warning',
          });
        }

        presentToast({
          message: 'Gagal untuk masuk.',
          duration: 2000,
          color: 'danger',
        });
      }
    }

    dismissLoading();
  };

  const handleRequestPasswordReset = async () => {
    const forgotPasswordEmail = forgotPasswordEmailRef.current?.value as string;

    presentLoading();

    try {
      await requestPasswordReset(forgotPasswordEmail);

      presentToast({
        message: 'Permintaan reset password berhasil, silakan cek email Anda.',
        duration: 4000,
        color: 'success',
      });

      setIsForgotPassword(false);
    } catch (err) {
      presentToast({
        message: 'Permintaan reset password gagal.',
        duration: 2000,
        color: 'danger',
      });

      console.error(err);
    }

    dismissLoading();
  };

  return (
    <>
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
                          onClick={handleLogin}
                        >
                          Masuk
                        </IonButton>
                      </IonCol>
                    </IonRow>

                    <IonRow className="ion-margin-vertical">
                      <IonCol>
                        <IonText
                          color="dark"
                          onClick={() => setIsForgotPassword(true)}
                          style={{
                            textDecoration: 'underline',
                            cursor: 'pointer',
                          }}
                        >
                          Lupa Kata Sandi?
                        </IonText>
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

      <IonModal isOpen={isForgotPassword}>
        <IonHeader>
          <IonToolbar color="secondary">
            <IonTitle>Atur Ulang Kata Sandi</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonContent>
          <IonGrid>
            <IonRow>
              <IonCol>
                <IonItem>
                  <IonIcon icon={mailOutline} color="primary" slot="start" />
                  <IonInput
                    type="text"
                    placeholder="Masukkan email Anda"
                    ref={forgotPasswordEmailRef}
                    required
                  />
                </IonItem>
              </IonCol>
            </IonRow>

            <IonRow className="ion-text-center">
              <IonCol>
                <IonButton
                  color="primary"
                  expand="block"
                  fill="solid"
                  onClick={handleRequestPasswordReset}
                >
                  Kirim
                </IonButton>
              </IonCol>
              <IonCol>
                <IonButton
                  color="danger"
                  expand="block"
                  fill="outline"
                  onClick={() => setIsForgotPassword(false)}
                >
                  Batal
                </IonButton>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonContent>
      </IonModal>
    </>
  );
};

export default Login;
