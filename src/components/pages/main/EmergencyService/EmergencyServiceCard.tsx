import { IonCard, IonCardHeader, IonCardSubtitle } from '@ionic/react';

import styles from 'styles/main/EmergencyService.module.scss';

type EmergencyServiceCardProps = {
  name: string;
  image: string;
  callNumber: string;
};

const EmergencyServiceCard: React.FC<EmergencyServiceCardProps> = ({
  name,
  image,
  callNumber
}: EmergencyServiceCardProps) => {
  return (
    <IonCard className={styles.emergencyServiceCard} href={'tel:' + callNumber}>
      <img src={image} alt={name} className={styles.emergencyServiceCardImage} />
      <IonCardHeader color="primary">
        <IonCardSubtitle>{name}</IonCardSubtitle>
      </IonCardHeader>
    </IonCard>
  );
};

export default EmergencyServiceCard;
