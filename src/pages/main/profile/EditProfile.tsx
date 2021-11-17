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
import { useEffect, useState } from 'react';

import Layout from 'components/layout';

interface User {
  name: string;
  bio: string;
  gender: string;
  email: string;
  phone: string;
  address: string;
}

const EditProfile: React.FC = () => {
  const [userData, setUserData] = useState<User>({
    name: 'John Doe',
    bio: 'Hello World',
    gender: 'male',
    email: 'john.doe@domain.com',
    phone: '08123456789',
    address: 'Jl. Mawar No. 1',
  });

  useEffect(() => {
    setUserData({
      name: 'John Doe',
      bio: 'Hello World',
      gender: 'male',
      email: 'john.doe@domain.com',
      phone: '08123456789',
      address: 'Jl. Mawar No. 1',
    });
  }, []);

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
                <IonInput value={userData.name} inputMode="text" clearInput />
              </IonItem>

              <IonItem>
                <IonLabel position="fixed" color="primary">
                  Bio
                </IonLabel>
                <IonInput value={userData.bio} inputMode="text" clearInput />
              </IonItem>

              <IonItem>
                <IonLabel position="fixed" color="primary">
                  Gender
                </IonLabel>
                <IonSelect
                  value={userData.gender}
                  onIonChange={(e) => e.detail.value}
                >
                  <IonSelectOption value="male">Laki-Laki</IonSelectOption>
                  <IonSelectOption value="female">Perempuan</IonSelectOption>
                </IonSelect>
              </IonItem>

              <IonItem>
                <IonLabel position="fixed" color="primary">
                  E-mail
                </IonLabel>
                <IonInput value={userData.email} inputMode="email" clearInput />
              </IonItem>

              <IonItem>
                <IonLabel position="fixed" color="primary">
                  No. Telp
                </IonLabel>
                <IonInput
                  value={userData.phone}
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
              routerLink="/main/profile"
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
