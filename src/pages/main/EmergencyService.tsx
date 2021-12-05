import { useContext } from 'react';
import { IonCol, IonGrid, IonRow } from '@ionic/react';

import { EmergencyServiceContext } from 'contexts/emergencyService';
import { EmergencyServiceCard } from 'components/main/EmergencyService';
import Layout from 'components/layout';

const EmergencyService: React.FC = () => {
  const servicesCtx = useContext(EmergencyServiceContext);

  return (
    <Layout title="Layanan Darurat">
      <IonGrid>
        <IonRow>
          {servicesCtx.services.map((service) => (
            <IonCol size="6" key={service.id}>
              <EmergencyServiceCard
                name={service.name}
                image={service.image}
                callNumber={service.callNumber}
              />
            </IonCol>
          ))}
        </IonRow>
      </IonGrid>
    </Layout>
  );
};

export default EmergencyService;
