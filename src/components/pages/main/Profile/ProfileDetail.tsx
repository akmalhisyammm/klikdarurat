import { useContext } from 'react';
import { IonList, IonItem, IonIcon, IonLabel } from '@ionic/react';
import {
  maleOutline,
  mailOutline,
  callOutline,
  mapOutline,
} from 'ionicons/icons';

import { UserDataContext } from 'contexts/userData';

const ProfileDetail: React.FC = () => {
  const { userData } = useContext(UserDataContext);

  return (
    <IonList>
      <IonItem>
        <IonIcon icon={maleOutline} slot="start" color="primary" />
        <IonLabel>
          {userData.gender === 'male' ? 'Laki-Laki' : 'Perempuan'}
        </IonLabel>
      </IonItem>

      <IonItem>
        <IonIcon icon={mailOutline} slot="start" color="primary" />
        <IonLabel>{userData.email}</IonLabel>
      </IonItem>

      <IonItem>
        <IonIcon icon={callOutline} slot="start" color="primary" />
        <IonLabel color={userData.phoneNumber ? '' : 'medium'}>
          {userData.phoneNumber
            ? userData.phoneNumber
            : 'Nomor telepon belum diisi'}
        </IonLabel>
      </IonItem>

      <IonItem>
        <IonIcon icon={mapOutline} slot="start" color="primary" />
        <IonLabel color={userData.address ? '' : 'medium'}>
          {userData.address ? userData.address : 'Alamat belum diisi'}
        </IonLabel>
      </IonItem>
    </IonList>
  );
};

export default ProfileDetail;
