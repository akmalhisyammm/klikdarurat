import { useRef, useState, useContext, KeyboardEvent } from 'react';
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
  IonLabel,
  IonList,
  IonRouterLink,
  IonRow,
  IonSelect,
  IonSelectOption,
  IonText,
  useIonLoading,
  useIonToast
} from '@ionic/react';
import {
  personOutline,
  mailOutline,
  lockClosedOutline,
  callOutline,
  transgenderOutline,
  keyOutline,
  eye,
  eyeOff
} from 'ionicons/icons';
import { klikDarurat } from 'assets';

import { AuthContext } from 'contexts/auth';
import Layout from 'components/layout';

import styles from 'styles/auth/Register.module.scss';

const Register: React.FC = () => {
  const [presentToast] = useIonToast();
  const [presentLoading, dismissLoading] = useIonLoading();

  const [selectedGender, setSelectedGender] = useState<'male' | 'female'>();
  const [isShowPassword, setIsShowPassword] = useState<boolean>(false);
  const [isShowConfirmPassword, setIsShowConfirmPassword] = useState<boolean>(false);

  const fullNameRef = useRef<HTMLIonInputElement>(null);
  const emailRef = useRef<HTMLIonInputElement>(null);
  const phoneNumberRef = useRef<HTMLIonInputElement>(null);
  const passwordRef = useRef<HTMLIonInputElement>(null);
  const confirmPasswordRef = useRef<HTMLIonInputElement>(null);

  const { currentUser, register } = useContext(AuthContext);

  const history = useHistory();

  if (currentUser) {
    return <Redirect to="/" />;
  }

  const handleRegister = async () => {
    const fullName = fullNameRef.current?.value;
    const email = emailRef.current?.value;
    const phoneNumber = phoneNumberRef.current?.value;
    const address = '';
    const bio = '';
    const photoUrl = '';
    const password = passwordRef.current?.value;
    const confirmPassword = confirmPasswordRef.current?.value;

    if (!fullName || fullName.toString().trim().length === 0) {
      return presentToast({
        message: 'Nama lengkap wajib diisi.',
        duration: 2000,
        color: 'warning'
      });
    }

    if (!email || email.toString().trim().length === 0) {
      return presentToast({
        message: 'Email wajib diisi.',
        duration: 2000,
        color: 'warning'
      });
    }

    if (!phoneNumber || phoneNumber.toString().trim().length === 0) {
      return presentToast({
        message: 'Nomor telepon wajib diisi.',
        duration: 2000,
        color: 'warning'
      });
    }

    if (!selectedGender) {
      return presentToast({
        message: 'Jenis kelamin wajib diisi.',
        duration: 2000,
        color: 'warning'
      });
    }

    if (!password || password.toString().length === 0) {
      return presentToast({
        message: 'Kata sandi wajib diisi.',
        duration: 2000,
        color: 'warning'
      });
    }

    if (password.toString().length < 6) {
      return presentToast({
        message: 'Kata sandi minimal 6 karakter.',
        duration: 2000,
        color: 'warning'
      });
    }

    if (!confirmPassword || password.toString() !== confirmPassword.toString()) {
      return presentToast({
        message: 'Kata sandi tidak sesuai.',
        duration: 2000,
        color: 'warning'
      });
    }

    presentLoading({ spinner: 'bubbles', cssClass: 'loading' });

    try {
      await register(
        email.toString(),
        password.toString(),
        fullName.toString().trim(),
        phoneNumber.toString().trim(),
        address,
        selectedGender,
        bio,
        photoUrl
      );

      presentToast({
        message: 'Berhasil membuat akun, silakan verifikasi email Anda.',
        duration: 4000,
        color: 'success'
      });

      history.replace('/login');
    } catch (error) {
      presentToast({
        message: 'Gagal membuat akun.',
        duration: 2000,
        color: 'danger'
      });
    }

    dismissLoading();
  };

  const enterKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      e.stopPropagation();
      handleRegister();
    }
  };

  return (
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
              <IonCard className={styles.registerCard}>
                <IonCardHeader>
                  <h1 className={styles.registerCardHeader}>
                    <IonText color="dark">Daftar</IonText>
                  </h1>
                </IonCardHeader>
                <IonCardContent>
                  <IonRow>
                    <IonCol>
                      <IonList className={styles.registerCardList}>
                        <IonItem className={styles.registerCardItem}>
                          <IonIcon icon={personOutline} color="secondary" slot="start" />
                          <IonInput
                            type="text"
                            inputMode="text"
                            ref={fullNameRef}
                            placeholder="Nama Lengkap"
                            onKeyDown={(e) => enterKeyDown(e)}
                            required
                          />
                        </IonItem>
                        <IonItem className={styles.registerCardItem}>
                          <IonIcon icon={mailOutline} color="secondary" slot="start" />
                          <IonInput
                            type="email"
                            inputMode="email"
                            ref={emailRef}
                            placeholder="Email"
                            onKeyDown={(e) => enterKeyDown(e)}
                            required
                          />
                        </IonItem>
                        <IonItem className={styles.registerCardItem}>
                          <IonIcon icon={callOutline} color="secondary" slot="start" />
                          <IonInput
                            type="tel"
                            inputMode="tel"
                            ref={phoneNumberRef}
                            placeholder="Nomor Telepon"
                            onKeyDown={(e) => enterKeyDown(e)}
                            required
                          />
                        </IonItem>
                        <IonItem className={styles.registerCardItem}>
                          <IonLabel hidden color="primary">
                            Jenis Kelamin
                          </IonLabel>
                          <IonIcon icon={transgenderOutline} color="secondary" slot="start" />
                          <IonSelect
                            placeholder="Jenis Kelamin"
                            onIonChange={(e) => setSelectedGender(e.detail.value)}
                            interface="alert"
                            style={{
                              paddingLeft: 0,
                              maxWidth: '100%'
                            }}>
                            <IonSelectOption value="male">Laki-laki</IonSelectOption>
                            <IonSelectOption value="female">Perempuan</IonSelectOption>
                          </IonSelect>
                        </IonItem>
                        <IonItem className={styles.registerCardItem}>
                          <IonIcon icon={lockClosedOutline} color="secondary" slot="start" />
                          <IonInput
                            type={isShowPassword ? 'text' : 'password'}
                            ref={passwordRef}
                            placeholder="Kata Sandi"
                            onKeyDown={(e) => enterKeyDown(e)}
                            required
                          />
                          <IonIcon
                            slot="end"
                            icon={isShowPassword ? eyeOff : eye}
                            onClick={() => setIsShowPassword(isShowPassword ? false : true)}
                            className={styles.toggleShowPassword}
                          />
                        </IonItem>
                        <IonItem className={styles.registerCardItem}>
                          <IonIcon icon={keyOutline} color="secondary" slot="start" />
                          <IonInput
                            type={isShowConfirmPassword ? 'text' : 'password'}
                            ref={confirmPasswordRef}
                            placeholder="Ulangi Kata Sandi"
                            onKeyDown={(e) => enterKeyDown(e)}
                            required
                          />
                          <IonIcon
                            slot="end"
                            icon={isShowConfirmPassword ? eyeOff : eye}
                            onClick={() =>
                              setIsShowConfirmPassword(isShowConfirmPassword ? false : true)
                            }
                            className={styles.toggleShowConfirmPassword}
                          />
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
                        onClick={handleRegister}>
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
              <IonText className={styles.contentFooter}>
                Sudah memiliki akun?{' '}
                <IonRouterLink color="danger" routerLink="/login" className={styles.loginLink}>
                  Masuk
                </IonRouterLink>
              </IonText>
            </IonCol>
          </IonRow>
        </IonGrid>
      </div>
    </Layout>
  );
};

export default Register;
