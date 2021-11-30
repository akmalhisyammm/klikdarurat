import { IonCol, IonGrid, IonRow } from '@ionic/react';
import { CallNumber } from '@ionic-native/call-number';
import { useContext } from 'react';

import { EmergencyServiceContext } from 'contexts/emergencyService';
import Layout from 'components/layout';
import EmergencyServiceCard from 'components/main/EmergencyService/EmergencyServiceCard';

const EmergencyService: React.FC = () => {
  const servicesCtx = useContext(EmergencyServiceContext);

  const handleEmergencyServiceCardClick = (callNumber: string) => {
    try {
      CallNumber.callNumber(callNumber, true);
      console.log('Launched dialer!');
    } catch (err) {
      console.error('Error launching dialer', err);
    }
  };

  return (
    <Layout title="Layanan Darurat">
      <IonGrid>
        <IonRow>
          {servicesCtx.services.map((service) => (
            <IonCol size="6" key={service.id}>
              <EmergencyServiceCard
                name={service.name}
                image={service.image}
                onClick={() =>
                  handleEmergencyServiceCardClick(service.callNumber)
                }
              />
            </IonCol>
          ))}
        </IonRow>
      </IonGrid>
    </Layout>
  );
};

export default EmergencyService;
