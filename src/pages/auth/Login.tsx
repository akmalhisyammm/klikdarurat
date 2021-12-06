import { useRef, useContext, useState, KeyboardEvent } from 'react';
import { Redirect, useHistory } from 'react-router-dom';
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
import { mailOutline, lockClosedOutline } from 'ionicons/icons';
import { klikDarurat } from 'assets';

import { requestPasswordReset } from 'services/firebase.service';
import { AuthContext } from 'contexts/auth';
import Layout from 'components/layout';

import styles from 'styles/auth/Login.module.scss';
import ForgotPasswordModal from 'components/auth/login/ForgotPasswordModal';

const Login: React.FC = () => {
  const [presentLoading, dismissLoading] = useIonLoading();
  const [presentToast] = useIonToast();

  const [isForgotPassword, setIsForgotPassword] = useState<boolean>(false);

  const emailRef = useRef<HTMLIonInputElement>(null);
  const passwordRef = useRef<HTMLIonInputElement>(null);
  const forgotPasswordEmailRef = useRef<HTMLIonInputElement>(null);

  const { currentUser, login } = useContext(AuthContext);

  const history = useHistory();

  if (currentUser) {
    return <Redirect to="/" />;
  }

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

    presentLoading({ spinner: 'bubbles', cssClass: 'loading' });

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
        } else if (err.message === 'auth/user-not-found') {
          dismissLoading();

          return presentToast({
            message: 'Email atau kata sandi salah.',
            duration: 2000,
            color: 'danger',
          });
        } else if (err.message === 'auth/wrong-password') {
          dismissLoading();

          return presentToast({
            message: 'Email atau kata sandi salah.',
            duration: 2000,
            color: 'danger',
          });
        } else if (err.message === 'auth/invalid-email') {
          dismissLoading();

          return presentToast({
            message: 'Email tidak valid.',
            duration: 2000,
            color: 'danger',
          });
        }
      }

      presentToast({
        message: 'Gagal untuk masuk.',
        duration: 2000,
        color: 'danger',
      });
    }

    dismissLoading();
  };

  const handleRequestPasswordReset = async () => {
    const forgotPasswordEmail = forgotPasswordEmailRef.current?.value as string;

    presentLoading({ spinner: 'bubbles', cssClass: 'loading' });

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

  const enterKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleLogin();
    }
  };

  return (
    <>
      <Layout>
        <div className={styles.contentBackground}>
          <IonGrid className={styles.contentWrapper}>
            <IonRow>
              <IonCol>
                <div className={styles.contentHeader}>
                  <span className={styles.logo}>
                    <img src={klikDarurat} alt="logo" width="40" />
                  </span>
                  &ensp;
                  <h1 className={styles.title}>KlikDarurat</h1>
                </div>
              </IonCol>
            </IonRow>

            <IonRow>
              <IonCol>
                <IonCard className={styles.loginCard}>
                  <IonCardHeader>
                    <h1 className={styles.loginCardHeader}>
                      <IonText color="dark">Masuk</IonText>
                    </h1>
                  </IonCardHeader>
                  <IonCardContent>
                    <IonRow>
                      <IonCol>
                        <IonList className={styles.loginCardList}>
                          <IonItem className={styles.loginCardItem}>
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
                              onKeyDown={(e) => enterKeyDown(e)}
                              required
                            />
                          </IonItem>
                          <IonItem className={styles.loginCardItem}>
                            <IonIcon
                              icon={lockClosedOutline}
                              color="primary"
                              slot="start"
                            />
                            <IonInput
                              type="password"
                              placeholder="Kata Sandi"
                              ref={passwordRef}
                              onKeyDown={(e) => enterKeyDown(e)}
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
                          className={styles.loginCardForgotPassword}
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
                <IonText className={styles.contentFooter}>
                  Belum memiliki akun?{' '}
                  <IonRouterLink
                    color="danger"
                    routerLink="/register"
                    className={styles.registerLink}
                  >
                    Daftar
                  </IonRouterLink>
                </IonText>
              </IonCol>
            </IonRow>
          </IonGrid>
        </div>
      </Layout>

      <ForgotPasswordModal
        isOpen={isForgotPassword}
        handleSendRequest={handleRequestPasswordReset}
        onDismiss={setIsForgotPassword}
      >
        <IonItem>
          <IonIcon icon={mailOutline} color="primary" slot="start" />
          <IonInput
            type="text"
            placeholder="Masukkan email Anda"
            ref={forgotPasswordEmailRef}
            required
          />
        </IonItem>
      </ForgotPasswordModal>
    </>
  );
};

export default Login;
