import { useContext, useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
  IonButton,
  IonCol,
  IonGrid,
  IonInput,
  IonItem,
  IonList,
  IonRow,
  IonSelect,
  IonSelectOption,
  useIonToast
} from '@ionic/react';
import { Camera, CameraResultType } from '@capacitor/camera';

import { UserDataContext } from 'contexts/userData';
import { EditProfilePhoto } from 'components/pages/main/EditProfile';
import Layout from 'components/layout';

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
        resultType: CameraResultType.Uri
      });

      if (!photo || !photo.webPath) {
        return;
      }

      setPhoto(photo.webPath);
    } catch (err) {
      // console.error(err);
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
      photoUrl: userData.photoUrl
    };

    try {
      await editUserData(updatedUser, photo);

      presentToast({
        message: 'Profil berhasil diubah.',
        duration: 2000,
        color: 'success'
      });

      history.replace('/main/profile');
    } catch (err) {
      // console.error(err);
      presentToast({
        message: 'Profil gagal diubah.',
        duration: 2000,
        color: 'danger'
      });
    }
  };

  return (
    <Layout title="Edit Profil">
      <IonGrid className="ion-text-center">
        <IonRow className="ion-margin-vertical">
          <IonCol>
            <EditProfilePhoto photo={photo} handleTakePhoto={handleTakePhoto} />
          </IonCol>
        </IonRow>

        <IonRow className="ion-margin-vertical">
          <IonCol>
            <IonList>
              <IonItem>
                <IonInput
                  ref={fullNameRef}
                  label="Nama"
                  labelPlacement="floating"
                  value={userData.fullName}
                  inputMode="text"
                  clearInput
                />
              </IonItem>

              <IonItem>
                <IonInput
                  ref={bioRef}
                  label="Bio"
                  labelPlacement="floating"
                  value={userData.bio}
                  inputMode="text"
                  clearInput
                />
              </IonItem>

              <IonItem>
                <IonSelect
                  label="Jenis Kelamin"
                  labelPlacement="floating"
                  value={gender ?? userData.gender}
                  onIonChange={(e: CustomEvent) => setGender(e.detail.value)}>
                  <IonSelectOption value="male">Laki-Laki</IonSelectOption>
                  <IonSelectOption value="female">Perempuan</IonSelectOption>
                </IonSelect>
              </IonItem>

              <IonItem>
                <IonInput
                  ref={emailRef}
                  label="Email"
                  labelPlacement="floating"
                  value={userData.email}
                  inputMode="email"
                  clearInput
                  disabled
                />
              </IonItem>

              <IonItem>
                <IonInput
                  ref={phoneNumberRef}
                  label="Nomor Telepon"
                  labelPlacement="floating"
                  value={userData.phoneNumber}
                  inputMode="tel"
                  maxlength={12}
                  clearInput
                />
              </IonItem>

              <IonItem>
                <IonInput
                  ref={addressRef}
                  label="Alamat"
                  labelPlacement="floating"
                  value={userData.address}
                  inputMode="text"
                  clearInput
                />
              </IonItem>
            </IonList>
          </IonCol>
        </IonRow>

        <IonRow>
          <IonCol>
            <IonButton shape="round" expand="block" color="primary" onClick={handleEditUserData}>
              Simpan
            </IonButton>
          </IonCol>
        </IonRow>
      </IonGrid>
    </Layout>
  );
};

export default EditProfile;
