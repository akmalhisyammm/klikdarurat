import {
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from '@ionic/react';
import { Redirect, Route } from 'react-router-dom';
import { map, medical, peopleCircle, personCircle } from 'ionicons/icons';

import PersonalService from 'pages/main/PersonalService';
import EmergencyService from 'pages/main/EmergencyService';
import EmergencyLocation from 'pages/main/EmergencyLocation';
import Profile from 'pages/main/profile/Profile';

const MainTabs: React.FC = () => {
  return (
    <IonTabs>
      <IonRouterOutlet>
        <Redirect exact from="/main" to="/main/emergency-service" />
        <Route path="/main/emergency-service" component={EmergencyService} />
        <Route path="/main/personal-service" component={PersonalService} />
        <Route path="/main/emergency-location" component={EmergencyLocation} />
        <Route path="/main/profile" component={Profile} />
      </IonRouterOutlet>
      <IonTabBar slot="bottom" color="secondary">
        <IonTabButton tab="service" href="/main/emergency-service">
          <IonIcon icon={medical} />
          <IonLabel>Layanan</IonLabel>
        </IonTabButton>
        <IonTabButton tab="personal" href="/main/personal-service">
          <IonIcon icon={peopleCircle} />
          <IonLabel>Kontak</IonLabel>
        </IonTabButton>
        <IonTabButton tab="location" href="/main/emergency-location">
          <IonIcon icon={map} />
          <IonLabel>Lokasi</IonLabel>
        </IonTabButton>
        <IonTabButton tab="profile" href="/main/profile">
          <IonIcon icon={personCircle} />
          <IonLabel>Profil</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  );
};

export default MainTabs;
