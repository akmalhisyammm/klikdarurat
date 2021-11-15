import { 
  IonPage,
  IonCard,
  IonCardContent,
  IonCol,
  IonContent,
  IonGrid,
  IonIcon,
  IonItem,
  IonLabel,
  IonRow,
  IonHeader,
  IonToolbar,
  IonCardTitle
} from '@ionic/react';

import { ellipsisVerticalOutline } from 'ionicons/icons';

import 'assets/emergency-service/index';
import { ambulans, basarnas, bnpb, callCenter, damkar, jasaMarga, pln, polisi } from 'assets/emergency-service/index';

const EmergencyService: React.FC = () => {
  const handleCallCenterClick = () => {
    console.log("Call Center button clicked!");
  };
  const handleAmbulanClick = () => {
    console.log("Ambulan button clicked!");
  };
  const handlePolisiClick = () => {
    console.log("Polisi button clicked!");
  };
  const handleDamkarClick = () => {
    console.log("Damkar button clicked!");
  };
  const handleBasarnasClick = () => {
    console.log("Basarnas button clicked!");
  };
  const handleBNPBClick = () => {
    console.log("BNPB button clicked!");
  };
  const handlePLNClick = () => {
    console.log("PLN button clicked!");
  };
  const handleJasaMargaClick = () => {
    console.log("Jasa Marga button clicked!");
  };

  return (
    <IonPage>
      <IonContent>
          <IonHeader>
            <IonToolbar color="danger">
              <IonItem color="danger">
                <IonLabel><h1>Layanan Darurat</h1></IonLabel>
                <IonIcon icon={ellipsisVerticalOutline}/>
              </IonItem>
            </IonToolbar>
          </IonHeader>

          <IonGrid style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            height: '100%'
          }}>
            <IonRow>
              <IonCol>
                <IonCard className="ion-text-center" color="secondary" onClick={handleCallCenterClick}>
                  <img src={callCenter}/>
                  <IonCardContent>
                    <IonCardTitle>Call Center</IonCardTitle>
                  </IonCardContent>
                </IonCard>
              </IonCol>
              <IonCol>
                <IonCard className="ion-text-center" color="secondary" onClick={handleAmbulanClick}>
                  <img src={ambulans}/>
                  <IonCardContent>
                    <IonCardTitle>Ambulan</IonCardTitle>
                  </IonCardContent>
                </IonCard>                
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonCard className="ion-text-center" color="secondary" onClick={handlePolisiClick}>
                  <img src={polisi}/>
                  <IonCardContent>
                    <IonCardTitle>Polisi</IonCardTitle>
                  </IonCardContent>
                </IonCard>
              </IonCol>
              <IonCol>
                <IonCard className="ion-text-center" color="secondary" onClick={handleDamkarClick}>
                  <img src={damkar}/>
                  <IonCardContent>
                    <IonCardTitle>Damkar</IonCardTitle>
                  </IonCardContent>
                </IonCard>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonCard className="ion-text-center" color="secondary" onClick={handleBasarnasClick}>
                  <img src={basarnas}/>
                  <IonCardContent>
                    <IonCardTitle>Basarnas</IonCardTitle>
                  </IonCardContent>
                </IonCard>
              </IonCol>
              <IonCol>
                <IonCard className="ion-text-center" color="secondary" onClick={handleBNPBClick}>
                  <img src={bnpb}/>
                  <IonCardContent>
                    <IonCardTitle>BNPB</IonCardTitle>
                  </IonCardContent>
                </IonCard>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonCard className="ion-text-center" color="secondary" onClick={handlePLNClick}>
                  <img src={pln}/>
                  <IonCardContent>
                    <IonCardTitle>PLN</IonCardTitle>
                  </IonCardContent>
                </IonCard>
              </IonCol>
              <IonCol>
                <IonCard className="ion-text-center" color="secondary" onClick={handleJasaMargaClick}>
                  <img src={jasaMarga}/>
                  <IonCardContent>
                    <IonCardTitle>Jasa Marga</IonCardTitle>
                  </IonCardContent>
                </IonCard>
              </IonCol>
            </IonRow>
          </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default EmergencyService;
