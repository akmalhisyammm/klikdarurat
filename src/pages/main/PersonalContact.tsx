import {
  IonFab,
  IonFabButton,
  IonIcon,
  IonItem,
  IonItemDivider,
  IonItemGroup,
  IonLabel,
  IonList,
  IonNote,
  IonSearchbar,
  IonToolbar,
} from '@ionic/react';
import { add, swapVertical } from 'ionicons/icons';

import Layout from 'components/layout';

const PersonalContact: React.FC = () => {
  return (
    <Layout title="Kontak Darurat">
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
    </Layout>
  );
};

export default PersonalContact;
