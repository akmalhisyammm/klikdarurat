import React, { useRef, useState, useContext } from 'react';
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
  IonSelect,
  IonSelectOption,
  IonText,
} from '@ionic/react';
import { klikDarurat } from 'assets';
import {
  personOutline,
  mailOutline,
  lockClosedOutline,
  callOutline,
  transgenderOutline,
  homeOutline,
} from 'ionicons/icons';

import { AuthContext } from 'contexts/auth';

import Layout from 'components/layout';

const Register: React.FC = () => {
  const [toastMessage, setToastMessage] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [selectedGender, setSelectedGender] = useState<'male' | 'female'>();
  const fullNameRef = useRef<HTMLIonInputElement>(null);
  const emailRef = useRef<HTMLIonInputElement>(null);
  const phoneNumberRef = useRef<HTMLIonInputElement>(null);
  const addressRef = useRef<HTMLIonInputElement>(null);
  const passwordRef = useRef<HTMLIonInputElement>(null);
  const confirmPasswordRef = useRef<HTMLIonInputElement>(null);
  const authCtx = useContext(AuthContext);
  const history = useHistory();

  const handleSelectGender = (event: CustomEvent) => {
    const gender = event.detail.value;

    setSelectedGender(gender);
  };

  const handleRegisterClick = async () => {
    const fullName = fullNameRef.current?.value;
    const email = emailRef.current?.value;
    const phoneNumber = phoneNumberRef.current?.value;
    const address = addressRef.current?.value;
    const password = passwordRef.current?.value;
    const confirmPassword = confirmPasswordRef.current?.value;

    if (
      !fullName ||
      !email ||
      !phoneNumber ||
      !address ||
      !selectedGender ||
      !password ||
      !confirmPassword
    ) {
      return;
    }

    if (fullName.toString().trim().length === 0) {
      setToastMessage('Nama wajib diisi');
      return;
    }

    if (email.toString().trim().length === 0) {
      setToastMessage('Email wajib diisi');
      return;
    }

    if (phoneNumber.toString().trim().length === 0) {
      setToastMessage('Nomor telepon wajib diisi');
      return;
    }

    if (address.toString().trim().length === 0) {
      setToastMessage('Alamat wajib diisi');
      return;
    }

    if (password.toString().length === 0) {
      setToastMessage('Kata sandi wajib diisi');
      return;
    }

    if (password.toString().length < 6) {
      setToastMessage('Kata sandi minimal 6 karakter');
      return;
    }

    if (password.toString() !== confirmPassword.toString()) {
      setToastMessage('Kata sandi tidak sesuai');
      return;
    }

    try {
      setToastMessage('');
      setLoading(true);

      await authCtx.register(
        email.toString(),
        password.toString(),
        fullName.toString().trim(),
        phoneNumber.toString().trim(),
        address.toString().trim(),
        selectedGender
      );

      setLoading(false);
      history.replace('/login');
    } catch (error) {
      setToastMessage('Gagal membuat akun');
    }

    setLoading(false);
  };

  return (
    <Layout>
      <div
        style={{
          width: '100%',
          height: '100%',
          background:
            'linear-gradient(135deg, rgba(224,108,120,1) 35%, rgba(250,146,132,1) 100%)',
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
                          <IonInput
                            type="text"
                            inputMode="text"
                            ref={fullNameRef}
                            placeholder="Nama Lengkap"
                            required
                          />
                        </IonItem>
                        <IonItem>
                          <IonIcon
                            icon={mailOutline}
                            color="secondary"
                            slot="start"
                          />
                          <IonInput
                            type="email"
                            inputMode="email"
                            ref={emailRef}
                            placeholder="Email"
                            required
                          />
                        </IonItem>
                        <IonItem>
                          <IonIcon
                            icon={callOutline}
                            color="secondary"
                            slot="start"
                          />
                          <IonInput
                            type="tel"
                            inputMode="tel"
                            ref={phoneNumberRef}
                            placeholder="Nomor Telepon"
                            required
                          />
                        </IonItem>
                        <IonItem>
                          <IonIcon
                            icon={homeOutline}
                            color="secondary"
                            slot="start"
                          />
                          <IonInput
                            type="text"
                            inputMode="text"
                            ref={addressRef}
                            placeholder="Alamat"
                            required
                          />
                        </IonItem>
                        <IonItem>
                          <IonIcon
                            icon={transgenderOutline}
                            color="secondary"
                            slot="start"
                          />
                          <IonSelect
                            placeholder="Jenis Kelamin"
                            onIonChange={handleSelectGender}
                            interface="alert"
                          >
                            <IonSelectOption value="male">
                              Laki-laki
                            </IonSelectOption>
                            <IonSelectOption value="female">
                              Perempuan
                            </IonSelectOption>
                          </IonSelect>
                        </IonItem>
                        <IonItem>
                          <IonIcon
                            icon={lockClosedOutline}
                            color="secondary"
                            slot="start"
                          />
                          <IonInput
                            type="password"
                            ref={passwordRef}
                            placeholder="Kata Sandi"
                            required
                          />
                        </IonItem>
                        <IonItem>
                          <IonIcon
                            icon={lockClosedOutline}
                            color="secondary"
                            slot="start"
                          />
                          <IonInput
                            type="password"
                            ref={confirmPasswordRef}
                            placeholder="Ulangi Kata Sandi"
                            required
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
                        onClick={handleRegisterClick}
                        disabled={loading}
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
      </div>
    </Layout>
  );
};

export default Register;
