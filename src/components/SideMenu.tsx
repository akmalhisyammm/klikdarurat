import {
  IonMenu,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonMenuToggle,
  IonItem,
  IonIcon,
  IonLabel,
} from '@ionic/react';
import { informationCircle, logIn, personAdd } from 'ionicons/icons';

const SideMenu: React.FC = () => {
  return (
    <IonMenu contentId="main">
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>KlikDarurat</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <IonList>
          <IonMenuToggle autoHide={false}>
            <IonItem button routerLink="/login">
              <IonIcon slot="start" color="primary" icon={logIn} />
              <IonLabel>Masuk</IonLabel>
            </IonItem>
            <IonItem button routerLink="/register">
              <IonIcon slot="start" color="primary" icon={personAdd} />
              <IonLabel>Daftar</IonLabel>
            </IonItem>
            <IonItem button routerLink="/about">
              <IonIcon slot="start" color="primary" icon={informationCircle} />
              <IonLabel>Tentang</IonLabel>
            </IonItem>
          </IonMenuToggle>
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default SideMenu;
