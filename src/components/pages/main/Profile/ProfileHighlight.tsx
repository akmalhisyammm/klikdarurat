import { useContext } from 'react';
import { IonAvatar, IonText } from '@ionic/react';
import { avatarPlaceholder } from 'assets';

import { UserDataContext } from 'contexts/userData';

import styles from 'styles/main/profile/Profile.module.scss';

const ProfileHighlight: React.FC = () => {
  const { userData } = useContext(UserDataContext);

  return (
    <div className={styles.contentHeader}>
      <IonAvatar className={styles.profileAvatar}>
        <img
          src={userData.photoUrl ? userData.photoUrl : avatarPlaceholder}
          alt="avatar"
        />
      </IonAvatar>
      <IonText className={styles.rightHeader}>
        <h3 className={styles.profileName}>
          <IonText color="danger">{userData.fullName}</IonText>
        </h3>
        <p>{userData.bio ? userData.bio : 'Tidak ada bio'}</p>
      </IonText>
    </div>
  );
};

export default ProfileHighlight;
