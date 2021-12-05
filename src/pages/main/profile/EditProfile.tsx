import { useContext, useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
  IonAvatar,
  IonButton,
  IonCol,
  IonGrid,
  IonIcon,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonRow,
  IonSelect,
  IonSelectOption,
  useIonToast,
} from '@ionic/react';
import { camera } from 'ionicons/icons';
import { Camera, CameraResultType } from '@capacitor/camera';

import { UserDataContext } from 'contexts/userData';
import Layout from 'components/layout';

import styles from 'styles/main/profile/EditProfile.module.scss';

const EditProfile: React.FC = () => {
  const [gender, setGender] = useState<'male' | 'female'>();
  const [photo, setPhoto] = useState<string>('');

  const [presentToast] = useIonToast();

  const fullNameRef = useRef<HTMLIonInputElement>(null);
  const emailRef = useRef<HTMLIonInputElement>(null);
  const phoneNumberRef = useRef<HTMLIonInputElement>(null);
  const addressRef = useRef<HTMLIonInputElement>(null);
  const bioRef = useRef<HTMLIonInputElement>(null);

  const { userData, editUserData } = useContext(UserDataContext);

  const history = useHistory();

  const handleTakePhoto = async () => {
    try {
      const photo = await Camera.getPhoto({
        quality: 80,
        allowEditing: false,
        resultType: CameraResultType.Uri,
      });

      if (!photo || !photo.webPath) {
        return;
      }

      setPhoto(photo.webPath);
    } catch (error) {
      console.error(error);
      setPhoto('');
    }
  };

  const handleEditUserData = async () => {
    const fullName = fullNameRef.current?.value as string;
    const email = emailRef.current?.value as string;
    const phoneNumber = phoneNumberRef.current?.value as string;
    const address = addressRef.current?.value as string;
    const bio = bioRef.current?.value as string;

    const updatedUser = {
      id: userData.id,
      fullName: fullName ?? userData.fullName,
      gender: gender ?? userData.gender,
      email: email ?? userData.email,
      phoneNumber: phoneNumber ?? userData.phoneNumber,
      address: address ?? userData.address,
      bio: bio ?? userData.bio,
      photoUrl: userData.photoUrl,
    };

    try {
      await editUserData(updatedUser, photo);

      presentToast({
        message: 'Profil berhasil di ubah.',
        duration: 2000,
        color: 'success',
      });

      history.replace('/main/profile');
    } catch (err) {
      console.error(err);
      presentToast({
        message: 'Profil gagal di ubah.',
        duration: 2000,
        color: 'danger',
      });
    }
  };

  return (
    <Layout title="Edit Profil">
      <IonGrid className="ion-text-center">
        <IonRow className="ion-margin-vertical">
          <IonCol>
            <IonAvatar className={styles.editProfileAvatar}>
              {photo ? (
                <img src={photo} alt="avatar" />
              ) : (
                <img
                  src={
                    userData.photoUrl
                      ? userData.photoUrl
                      : './assets/images/avatar-placeholder.png'
                  }
                  alt="avatar"
                />
              )}
            </IonAvatar>
            <IonButton fill="clear" color="danger" onClick={handleTakePhoto}>
              <IonIcon slot="start" icon={camera} />
              <IonLabel>Pilih Foto</IonLabel>
            </IonButton>
          </IonCol>
        </IonRow>

        <IonRow className="ion-margin-vertical">
          <IonCol>
            <IonList>
              <IonItem>
                <IonLabel position="fixed" color="primary">
                  Nama
                </IonLabel>
                <IonInput
                  ref={fullNameRef}
                  value={userData.fullName}
                  placeholder="Nama Lengkap"
                  inputMode="text"
                  clearInput
                />
              </IonItem>

              <IonItem>
                <IonLabel position="fixed" color="primary">
                  Bio
                </IonLabel>
                <IonInput
                  ref={bioRef}
                  value={userData.bio}
                  placeholder="Bio"
                  inputMode="text"
                  clearInput
                />
              </IonItem>

              <IonItem>
                <IonLabel position="fixed" color="primary">
                  Gender
                </IonLabel>
                <IonSelect
                  value={gender ?? userData.gender}
                  onIonChange={(e: CustomEvent) => setGender(e.detail.value)}
                >
                  <IonSelectOption value="male">Laki-Laki</IonSelectOption>
                  <IonSelectOption value="female">Perempuan</IonSelectOption>
                </IonSelect>
              </IonItem>

              <IonItem>
                <IonLabel position="fixed" color="primary">
                  E-mail
                </IonLabel>
                <IonInput
                  ref={emailRef}
                  value={userData.email}
                  placeholder="Email"
                  inputMode="email"
                  clearInput
                  disabled
                />
              </IonItem>

              <IonItem>
                <IonLabel position="fixed" color="primary">
                  No. Telp
                </IonLabel>
                <IonInput
                  ref={phoneNumberRef}
                  value={userData.phoneNumber}
                  placeholder="Nomor Telepon"
                  inputMode="tel"
                  maxlength={12}
                  clearInput
                />
              </IonItem>

              <IonItem>
                <IonLabel position="fixed" color="primary">
                  Alamat
                </IonLabel>
                <IonInput
                  ref={addressRef}
                  value={userData.address}
                  placeholder="Alamat"
                  inputMode="text"
                  clearInput
                />
              </IonItem>
            </IonList>
          </IonCol>
        </IonRow>

        <IonRow>
          <IonCol>
            <IonButton
              shape="round"
              expand="block"
              color="primary"
              onClick={handleEditUserData}
            >
              Simpan
            </IonButton>
          </IonCol>
        </IonRow>
      </IonGrid>
    </Layout>
  );
};

export default EditProfile;
