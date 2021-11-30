import { IonCard, IonCardHeader, IonCardSubtitle } from '@ionic/react';

type EmergencyServiceCardProps = {
  name: string;
  image: string;
  onClick: () => void;
};

const EmergencyServiceCard: React.FC<EmergencyServiceCardProps> = ({
  name,
  image,
  onClick,
}) => {
  return (
    <IonCard color="secondary" className="ion-text-center" onClick={onClick}>
      <img
        src={image}
        alt={name}
        width="60%"
        style={{
          margin: '32px 0',
        }}
      />
      <IonCardHeader color="primary">
        <IonCardSubtitle>{name}</IonCardSubtitle>
      </IonCardHeader>
    </IonCard>
  );
};

export default EmergencyServiceCard;
