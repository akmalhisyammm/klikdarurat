import { useContext } from 'react';
import { IonAvatar, IonButton, IonIcon, IonLabel } from '@ionic/react';
import { camera } from 'ionicons/icons';
import { avatarPlaceholder } from 'assets';

import { UserDataContext } from 'contexts/userData';

import styles from 'styles/main/profile/EditProfile.module.scss';

type EditProfilePhotoProps = {
  photo: string;
  handleTakePhoto: () => void;
};

const EditProfilePhoto: React.FC<EditProfilePhotoProps> = ({
  photo,
  handleTakePhoto,
}) => {
  const { userData } = useContext(UserDataContext);

  return (
    <>
      <IonAvatar className={styles.editProfileAvatar}>
        {photo ? (
          <img src={photo} alt="avatar" />
        ) : (
          <img
            src={userData.photoUrl ? userData.photoUrl : avatarPlaceholder}
            alt="avatar"
          />
        )}
      </IonAvatar>

      <IonButton fill="clear" color="danger" onClick={handleTakePhoto}>
        <IonIcon slot="start" icon={camera} />
        <IonLabel>Ambil Foto</IonLabel>
      </IonButton>
    </>
  );
};

export default EditProfilePhoto;
