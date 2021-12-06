import { IonRow, IonCol } from '@ionic/react';
import styles from 'styles/About.module.scss';

const AppReference: React.FC = () => {
  return (
    <IonRow>
      <IonCol>
        <hr className={styles.sectionDivider} />
        <h2>Referensi Gambar</h2>
        <ul className={styles.referenceSection}>
          <li>Freepik</li>
          <li>Wikipedia</li>
        </ul>
      </IonCol>
    </IonRow>
  );
};

export default AppReference;
