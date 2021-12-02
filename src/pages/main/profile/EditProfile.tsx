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
} from '@ionic/react';
import { folder } from 'ionicons/icons';
import { useContext, useEffect, useRef, useState } from 'react';

import Layout from 'components/layout';
import { AuthContext } from 'contexts/auth';
import { getUserData, updateUserData } from 'services/firebase';
import { UserData } from 'types/userData';
import { useHistory } from 'react-router';

const initialData: UserData = {
  id: '1',
  fullName: 'John Doe',
  gender: 'male',
  email: 'example@domain.com',
  phoneNumber: '12345',
  address: 'USA',
};

const EditProfile: React.FC = () => {
  const [userData, setUserData] = useState<UserData>(initialData);
  const [gender, setGender] = useState<'male' | 'female'>('male');

  const fullNameRef = useRef<HTMLIonInputElement>(null);
  const emailRef = useRef<HTMLIonInputElement>(null);
  const phoneNumberRef = useRef<HTMLIonInputElement>(null);
  const addressRef = useRef<HTMLIonInputElement>(null);

  const { currentUser } = useContext(AuthContext);

  const history = useHistory();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const data = await getUserData(currentUser);

        if (!data) return;

        setUserData(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchUserData();
  }, [currentUser]);

  const handleEditUserData = async () => {
    const fullName = fullNameRef.current?.value as string;
    const email = emailRef.current?.value as string;
    const phoneNumber = phoneNumberRef.current?.value as string;
    const address = addressRef.current?.value as string;

    const updatedUser = {
      fullName: fullName ?? userData.fullName,
      gender: gender ?? userData.gender,
      email: email ?? userData.email,
      phoneNumber: phoneNumber ?? userData.phoneNumber,
      address: address ?? userData.address,
    };

    try {
      await updateUserData(currentUser, updatedUser);

      history.replace('/main/profile');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Layout title="Edit Profil">
      <IonGrid className="ion-text-center">
        <IonRow className="ion-margin-vertical">
          <IonCol>
            <IonAvatar
              style={{
                width: '160px',
                height: '160px',
                margin: '4px auto',
                border: '2px solid var(--ion-color-danger)',
              }}
            >
              <img src="https://i.pravatar.cc/300?img=13" alt="avatar" />
            </IonAvatar>
            <IonButton fill="clear" color="danger">
              <IonIcon slot="start" icon={folder} />
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
                  inputMode="text"
                  clearInput
                />
              </IonItem>

              <IonItem>
                <IonLabel position="fixed" color="primary">
                  Bio
                </IonLabel>
                <IonInput value="Hello World" inputMode="text" clearInput />
              </IonItem>

              <IonItem>
                <IonLabel position="fixed" color="primary">
                  Gender
                </IonLabel>
                <IonSelect
                  value={userData.gender}
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
                  inputMode="email"
                  clearInput
                />
              </IonItem>

              <IonItem>
                <IonLabel position="fixed" color="primary">
                  No. Telp
                </IonLabel>
                <IonInput
                  value={userData.phoneNumber}
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
