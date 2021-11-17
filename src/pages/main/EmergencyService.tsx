import {
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCol,
  IonGrid,
  IonRow,
} from '@ionic/react';
import {
  ambulans,
  basarnas,
  bnpb,
  callCenter,
  damkar,
  jasaMarga,
  pln,
  polisi,
} from 'assets';

import Layout from 'components/layout';

const EmergencyService: React.FC = () => {
  const handleCallCenterClick = () => {
    console.log('Call Center button clicked!');
  };

  const handleAmbulanClick = () => {
    console.log('Ambulan button clicked!');
  };

  const handlePolisiClick = () => {
    console.log('Polisi button clicked!');
  };

  const handleDamkarClick = () => {
    console.log('Damkar button clicked!');
  };

  const handleBasarnasClick = () => {
    console.log('Basarnas button clicked!');
  };

  const handleBNPBClick = () => {
    console.log('BNPB button clicked!');
  };

  const handlePLNClick = () => {
    console.log('PLN button clicked!');
  };

  const handleJasaMargaClick = () => {
    console.log('Jasa Marga button clicked!');
  };

  return (
    <Layout title="Layanan Darurat">
      <IonGrid>
        <IonRow>
          <IonCol size="6">
            <IonCard
              color="secondary"
              className="ion-text-center"
              onClick={handleCallCenterClick}
            >
              <img
                src={callCenter}
                alt="Call Center"
                width="60%"
                style={{
                  margin: '32px 0',
                }}
              />
              <IonCardHeader color="primary">
                <IonCardSubtitle>Call Center</IonCardSubtitle>
              </IonCardHeader>
            </IonCard>
          </IonCol>

          <IonCol size="6">
            <IonCard
              color="secondary"
              className="ion-text-center"
              onClick={handleAmbulanClick}
            >
              <img
                src={ambulans}
                alt="Ambulans"
                width="60%"
                style={{
                  margin: '32px 0',
                }}
              />
              <IonCardHeader color="primary">
                <IonCardSubtitle>Ambulans</IonCardSubtitle>
              </IonCardHeader>
            </IonCard>
          </IonCol>

          <IonCol size="6">
            <IonCard
              className="ion-text-center"
              color="secondary"
              onClick={handlePolisiClick}
            >
              <img
                src={polisi}
                alt="Polisi"
                width="60%"
                style={{
                  margin: '32px 0',
                }}
              />
              <IonCardHeader color="primary">
                <IonCardSubtitle>Polisi</IonCardSubtitle>
              </IonCardHeader>
            </IonCard>
          </IonCol>

          <IonCol size="6">
            <IonCard
              className="ion-text-center"
              color="secondary"
              onClick={handleDamkarClick}
            >
              <img
                src={damkar}
                alt="Damkar"
                width="60%"
                style={{
                  margin: '32px 0',
                }}
              />
              <IonCardHeader color="primary">
                <IonCardSubtitle>Damkar</IonCardSubtitle>
              </IonCardHeader>
            </IonCard>
          </IonCol>

          <IonCol size="6">
            <IonCard
              className="ion-text-center"
              color="secondary"
              onClick={handleBasarnasClick}
            >
              <img
                src={basarnas}
                alt="Basarnas"
                width="60%"
                style={{
                  margin: '32px 0',
                }}
              />
              <IonCardHeader color="primary">
                <IonCardSubtitle>Basarnas</IonCardSubtitle>
              </IonCardHeader>
            </IonCard>
          </IonCol>

          <IonCol size="6">
            <IonCard
              className="ion-text-center"
              color="secondary"
              onClick={handleBNPBClick}
            >
              <img
                src={bnpb}
                alt="BNPB"
                width="60%"
                style={{
                  margin: '32px 0',
                }}
              />
              <IonCardHeader color="primary">
                <IonCardSubtitle>BNPB</IonCardSubtitle>
              </IonCardHeader>
            </IonCard>
          </IonCol>

          <IonCol size="6">
            <IonCard
              className="ion-text-center"
              color="secondary"
              onClick={handlePLNClick}
            >
              <img
                src={pln}
                alt="PLN"
                width="60%"
                style={{
                  margin: '32px 0',
                }}
              />
              <IonCardHeader color="primary">
                <IonCardSubtitle>PLN</IonCardSubtitle>
              </IonCardHeader>
            </IonCard>
          </IonCol>

          <IonCol size="6">
            <IonCard
              className="ion-text-center"
              color="secondary"
              onClick={handleJasaMargaClick}
            >
              <img
                src={jasaMarga}
                alt="Jasa Marga"
                width="60%"
                style={{
                  margin: '32px 0',
                }}
              />
              <IonCardHeader color="primary">
                <IonCardSubtitle>Jasa Marga</IonCardSubtitle>
              </IonCardHeader>
            </IonCard>
          </IonCol>
        </IonRow>
      </IonGrid>
    </Layout>
  );
};

export default EmergencyService;
