import {
  IonCol,
  IonGrid,
  IonIcon,
  IonRouterLink,
  IonRow,
  IonText,
} from '@ionic/react';
import { emergencyCall } from 'assets';
import { openOutline } from 'ionicons/icons';

import { AuthButton } from 'components/pages/Home';
import Layout from 'components/layout';

import styles from 'styles/Home.module.scss';

const Home: React.FC = () => {
  return (
    <Layout>
      <IonGrid className={styles.contentWrapper}>
        <IonRow>
          <IonCol>
            <h1 className={styles.title}>
              Selamat Datang di <IonText color="danger">KlikDarurat</IonText>
            </h1>
          </IonCol>
        </IonRow>

        <IonRow className="ion-margin-vertical">
          <IonCol>
            <img
              src={emergencyCall}
              alt="emergency call"
              className={styles.illustration}
            />
          </IonCol>
        </IonRow>

        <IonRow>
          <IonCol>
            <AuthButton />
          </IonCol>
        </IonRow>

        <IonRow className="ion-margin-vertical">
          <IonCol>
            <IonRouterLink color="danger" routerLink="/about">
              Tentang Kami <IonIcon icon={openOutline} />
            </IonRouterLink>
          </IonCol>
        </IonRow>
      </IonGrid>
    </Layout>
  );
};

export default Home;
