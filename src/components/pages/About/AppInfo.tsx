import { IonRow, IonCol, IonText } from '@ionic/react';
import { klikDarurat } from 'assets';
import styles from 'styles/About.module.scss';

const AppInfo: React.FC = () => {
  return (
    <IonRow className={styles.infoSection}>
      <IonCol size="12">
        <img src={klikDarurat} alt="klikdarurat" width="50%" />
      </IonCol>
      <IonCol size="12">
        <p>
          <IonText color="danger">KlikDarurat</IonText> merupakan aplikasi
          layanan darurat yang dibangun untuk membantu masyarakat dalam
          menghadapi situasi darurat.
        </p>
      </IonCol>
    </IonRow>
  );
};

export default AppInfo;
