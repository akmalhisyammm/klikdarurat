import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonButton,
  IonIcon,
} from '@ionic/react';
import { logoGithub } from 'ionicons/icons';

import styles from 'styles/About.module.scss';

type DeveloperCardProps = {
  name: string;
  nim: string;
  photo: string;
  githubLink: string;
};

const DeveloperCard: React.FC<DeveloperCardProps> = ({
  name,
  nim,
  photo,
  githubLink,
}) => {
  return (
    <IonCard color="secondary" className={styles.teamCard}>
      <img src={photo} alt={name} className={styles.teamCardImage} />

      <IonCardHeader className={styles.teamCardHeader}>
        <IonCardTitle>{name}</IonCardTitle>
        <p>{nim}</p>
      </IonCardHeader>

      <IonCardContent className={styles.teamCardContent}>
        <hr className={styles.teamCardContentDivider} />
        <IonButton
          fill="clear"
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          <IonIcon
            icon={logoGithub}
            color="danger"
            className={styles.teamCardContentIcon}
          />
        </IonButton>
      </IonCardContent>
    </IonCard>
  );
};

export default DeveloperCard;
