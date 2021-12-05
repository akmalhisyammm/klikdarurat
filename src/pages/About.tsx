import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonCol,
  IonGrid,
  IonIcon,
  IonRow,
  IonText,
} from '@ionic/react';
import { ade, akmal, dimas, indra, klikDarurat, rezalutfi } from 'assets';
import { logoGithub } from 'ionicons/icons';

import Layout from 'components/layout';

import styles from 'styles/About.module.scss';

const About: React.FC = () => {
  return (
    <Layout title="Tentang">
      <IonGrid className="ion-text-center">
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

        <IonRow className="ion-justify-content-center">
          <IonCol size="12">
            <hr className={styles.sectionDivider} />
            <h2>Tim Kami</h2>
          </IonCol>

          <IonCol sizeLg="6" sizeMd="6" sizeSm="6" sizeXs="12">
            <IonCard color="secondary" className={styles.teamCard}>
              <img
                src={akmal}
                alt="Muhammad Akmal Hisyam"
                className={styles.teamCardImage}
              />
              <IonCardHeader className={styles.teamCardHeader}>
                <IonCardTitle>Muhammad Akmal Hisyam</IonCardTitle>
                <p>00000040027</p>
              </IonCardHeader>
              <IonCardContent className={styles.teamCardContent}>
                <hr className={styles.teamCardContentDivider} />
                <IonButton
                  fill="clear"
                  href="https://github.com/akmalhisyammm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IonIcon
                    icon={logoGithub}
                    color="danger"
                    className={styles.teamCardContentIcon}
                  />
                </IonButton>
              </IonCardContent>
            </IonCard>
          </IonCol>

          <IonCol sizeLg="6" sizeMd="6" sizeSm="6" sizeXs="12">
            <IonCard color="secondary" className={styles.teamCard}>
              <img
                src={ade}
                alt="Ade Kiswara"
                className={styles.teamCardImage}
              />
              <IonCardHeader className={styles.teamCardHeader}>
                <IonCardTitle>Ade Kiswara</IonCardTitle>
                <p>00000040037</p>
              </IonCardHeader>
              <IonCardContent className={styles.teamCardContent}>
                <hr className={styles.teamCardContentDivider} />
                <IonButton
                  fill="clear"
                  href="https://github.com/adekiswara"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IonIcon
                    icon={logoGithub}
                    color="danger"
                    className={styles.teamCardContentIcon}
                  />
                </IonButton>
              </IonCardContent>
            </IonCard>
          </IonCol>

          <IonCol sizeLg="6" sizeMd="6" sizeSm="6" sizeXs="12">
            <IonCard color="secondary" className={styles.teamCard}>
              <img
                src={dimas}
                alt="Dimas Lesmana"
                className={styles.teamCardImage}
              />
              <IonCardHeader className={styles.teamCardHeader}>
                <IonCardTitle>Dimas Lesmana</IonCardTitle>
                <p>00000041281</p>
              </IonCardHeader>
              <IonCardContent className={styles.teamCardContent}>
                <hr className={styles.teamCardContentDivider} />
                <IonButton
                  fill="clear"
                  href="https://github.com/dimaslesmana"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IonIcon
                    icon={logoGithub}
                    color="danger"
                    className={styles.teamCardContentIcon}
                  />
                </IonButton>
              </IonCardContent>
            </IonCard>
          </IonCol>

          <IonCol sizeLg="6" sizeMd="6" sizeSm="6" sizeXs="12">
            <IonCard color="secondary" className={styles.teamCard}>
              <img
                src={indra}
                alt="Indra Prasetya Hadiwana"
                className={styles.teamCardImage}
              />
              <IonCardHeader className={styles.teamCardHeader}>
                <IonCardTitle>Indra Prasetya Hadiwana</IonCardTitle>
                <p>00000028935</p>
              </IonCardHeader>
              <IonCardContent className={styles.teamCardContent}>
                <hr className={styles.teamCardContentDivider} />
                <IonButton
                  fill="clear"
                  href="https://github.com/indrasb"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IonIcon
                    icon={logoGithub}
                    color="danger"
                    className={styles.teamCardContentIcon}
                  />
                </IonButton>
              </IonCardContent>
            </IonCard>
          </IonCol>

          <IonCol sizeLg="6" sizeMd="6" sizeSm="6" sizeXs="12">
            <IonCard color="secondary" className={styles.teamCard}>
              <img
                src={rezalutfi}
                alt="Muhammad Rezalutfi"
                className={styles.teamCardImage}
              />
              <IonCardHeader className={styles.teamCardHeader}>
                <IonCardTitle>Muhammad Rezalutfi</IonCardTitle>
                <p>00000028098</p>
              </IonCardHeader>
              <IonCardContent className={styles.teamCardContent}>
                <hr className={styles.teamCardContentDivider} />
                <IonButton
                  fill="clear"
                  href="https://github.com/Rezalutfi22"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IonIcon
                    icon={logoGithub}
                    color="danger"
                    className={styles.teamCardContentIcon}
                  />
                </IonButton>
              </IonCardContent>
            </IonCard>
          </IonCol>
        </IonRow>
      </IonGrid>
    </Layout>
  );
};

export default About;
