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

import Personal from 'pages/main/Personal';
import Service from 'pages/main/Service';
import Location from 'pages/main/Location';
import Profile from 'pages/main/profile/Profile';

const MainTabs: React.FC = () => {
  return (
    <IonTabs>
      <IonRouterOutlet>
        <Redirect exact from="/main" to="/main/service" />
        <Route path="/main/service" component={Service} />
        <Route path="/main/personal" component={Personal} />
        <Route path="/main/location" component={Location} />
        <Route path="/main/profile" component={Profile} />
      </IonRouterOutlet>
      <IonTabBar slot="bottom" color="secondary">
        <IonTabButton tab="service" href="/main/service">
          <IonIcon icon={medical} />
          <IonLabel>Layanan</IonLabel>
        </IonTabButton>
        <IonTabButton tab="personal" href="/main/personal">
          <IonIcon icon={peopleCircle} />
          <IonLabel>Kontak</IonLabel>
        </IonTabButton>
        <IonTabButton tab="location" href="/main/location">
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
