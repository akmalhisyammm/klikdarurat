import { IonCard, IonCardHeader, IonCardSubtitle } from '@ionic/react';

type EmergencyServiceCardProps = {
  name: string;
  image: string;
  callNumber: string;
};

const EmergencyServiceCard: React.FC<EmergencyServiceCardProps> = ({
  name,
  image,
  callNumber,
}) => {
  return (
    <IonCard
      color="secondary"
      className="ion-text-center"
      href={'tel:' + callNumber}
    >
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
