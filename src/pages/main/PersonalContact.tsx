import {
  IonButtons,
  IonContent,
  IonFab,
  IonFabButton,
  IonHeader,
  IonIcon,
  IonItem,
  IonItemDivider,
  IonItemGroup,
  IonLabel,
  IonList,
  IonMenuButton,
  IonNote,
  IonPage,
  IonSearchbar,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import { add, swapVertical } from 'ionicons/icons';

const PersonalContact: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="danger">
          <IonTitle>Kontak Darurat</IonTitle>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <IonToolbar color="primary">
          <IonSearchbar
            color="light"
            placeholder="Cari Kontak..."
            style={{
              '--border-radius': '24px',
              '--box-shadow': '0 0 0 1px var(--ion-color-dark)',
              margin: '12px 0 8px',
              padding: '0 6px',
            }}
          />
        </IonToolbar>

        <IonList>
          <IonItem>
            <IonLabel>A-Z</IonLabel>
            <IonIcon icon={swapVertical} slot="end" />
          </IonItem>
          <IonItemGroup>
            <IonItemDivider>
              <IonLabel>A</IonLabel>
            </IonItemDivider>
            <IonItem>
              <IonLabel>Ade Kiswara</IonLabel>
              <IonNote slot="end"> Note </IonNote>
            </IonItem>

            <IonItemDivider>
              <IonLabel>D</IonLabel>
            </IonItemDivider>
            <IonItem lines="inset">
              <IonLabel>Dimas Lesmana</IonLabel>
              <IonNote slot="end"> Note </IonNote>
            </IonItem>

            <IonItemDivider>
              <IonLabel>I</IonLabel>
            </IonItemDivider>
            <IonItem lines="full">
              <IonLabel>Indra Prasetya Hadiwana</IonLabel>
              <IonNote slot="end"> Note </IonNote>
            </IonItem>

            <IonItemDivider>
              <IonLabel>M</IonLabel>
            </IonItemDivider>
            <IonItem>
              <IonLabel>Muhammad Akmal Hiyam</IonLabel>
              <IonNote slot="end"> Note </IonNote>
            </IonItem>
            <IonItem>
              <IonLabel>Muhammad Rezalutfi</IonLabel>
              <IonNote slot="end"> Note </IonNote>
            </IonItem>
          </IonItemGroup>
        </IonList>

        <IonFab vertical="bottom" horizontal="end" slot="fixed">
          <IonFabButton>
            <IonIcon icon={add} />
          </IonFabButton>
        </IonFab>
      </IonContent>
    </IonPage>
  );
};

export default PersonalContact;
