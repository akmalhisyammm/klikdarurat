import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonPage,
  IonRow,
  IonText,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import { ade, akmal, dimas, indra, klikDarurat, rezalutfi } from 'assets';
import { logoGithub } from 'ionicons/icons';

const About: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="danger">
          <IonTitle>Tentang</IonTitle>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/" />
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <IonGrid className="ion-text-center">
          <IonRow style={{ marginTop: '32px' }}>
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
              <hr
                style={{
                  borderBottom: '1px solid var(--ion-color-danger)',
                  marginBottom: '24px',
                }}
              />
              <h2>Referensi Gambar</h2>
              <ul style={{ textAlign: 'left' }}>
                <li>Freepik</li>
                <li>Wikipedia</li>
              </ul>
            </IonCol>
          </IonRow>

          <IonRow className="ion-justify-content-center">
            <IonCol size="12">
              <hr
                style={{
                  borderBottom: '1px solid var(--ion-color-danger)',
                  marginBottom: '24px',
                }}
              />
              <h2>Tim Kami</h2>
            </IonCol>

            <IonCol sizeLg="6" sizeMd="6" sizeSm="6" sizeXs="12">
              <IonCard
                color="secondary"
                style={{
                  borderRadius: '18px',
                  padding: '8px',
                  margin: '0 8px 12px',
                }}
              >
                <img
                  src={akmal}
                  alt="Muhammad Akmal Hisyam"
                  style={{
                    border: '3px solid var(--ion-color-danger)',
                    borderRadius: '12px',
                  }}
                />
                <IonCardHeader style={{ padding: '16px 8px 0' }}>
                  <IonCardTitle>Muhammad Akmal Hisyam</IonCardTitle>
                  <p>00000040027</p>
                </IonCardHeader>
                <IonCardContent style={{ padding: '0 8px 8px' }}>
                  <hr
                    style={{
                      borderBottom: '2px solid var(--ion-color-danger)',
                      margin: '18px 0 12px',
                    }}
                  />
                  <IonButton
                    fill="clear"
                    href="https://github.com/akmalhisyammm"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <IonIcon
                      icon={logoGithub}
                      color="danger"
                      style={{ fontSize: '2em' }}
                    />
                  </IonButton>
                </IonCardContent>
              </IonCard>
            </IonCol>

            <IonCol sizeLg="6" sizeMd="6" sizeSm="6" sizeXs="12">
              <IonCard
                color="secondary"
                style={{
                  borderRadius: '18px',
                  padding: '8px',
                  margin: '0 8px 12px',
                }}
              >
                <img
                  src={ade}
                  alt="Ade Kiswara"
                  style={{
                    border: '3px solid var(--ion-color-danger)',
                    borderRadius: '12px',
                  }}
                />
                <IonCardHeader style={{ padding: '16px 8px 0' }}>
                  <IonCardTitle>Ade Kiswara</IonCardTitle>
                  <p>00000040037</p>
                </IonCardHeader>
                <IonCardContent style={{ padding: '0 8px 8px' }}>
                  <hr
                    style={{
                      borderBottom: '2px solid var(--ion-color-danger)',
                      margin: '18px 0 12px',
                    }}
                  />
                  <IonButton
                    fill="clear"
                    href="https://github.com/adekiswara"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <IonIcon
                      icon={logoGithub}
                      color="danger"
                      style={{ fontSize: '2em' }}
                    />
                  </IonButton>
                </IonCardContent>
              </IonCard>
            </IonCol>

            <IonCol sizeLg="6" sizeMd="6" sizeSm="6" sizeXs="12">
              <IonCard
                color="secondary"
                style={{
                  borderRadius: '18px',
                  padding: '8px',
                  margin: '0 8px 12px',
                }}
              >
                <img
                  src={dimas}
                  alt="Dimas Lesmana"
                  style={{
                    border: '3px solid var(--ion-color-danger)',
                    borderRadius: '12px',
                  }}
                />
                <IonCardHeader style={{ padding: '16px 8px 0' }}>
                  <IonCardTitle>Dimas Lesmana</IonCardTitle>
                  <p>00000041281</p>
                </IonCardHeader>
                <IonCardContent style={{ padding: '0 8px 8px' }}>
                  <hr
                    style={{
                      borderBottom: '2px solid var(--ion-color-danger)',
                      margin: '18px 0 12px',
                    }}
                  />
                  <IonButton
                    fill="clear"
                    href="https://github.com/dimaslesmana"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <IonIcon
                      icon={logoGithub}
                      color="danger"
                      style={{ fontSize: '2em' }}
                    />
                  </IonButton>
                </IonCardContent>
              </IonCard>
            </IonCol>

            <IonCol sizeLg="6" sizeMd="6" sizeSm="6" sizeXs="12">
              <IonCard
                color="secondary"
                style={{
                  borderRadius: '18px',
                  padding: '8px',
                  margin: '0 8px 12px',
                }}
              >
                <img
                  src={indra}
                  alt="Indra Prasetya Hadiwana"
                  style={{
                    border: '3px solid var(--ion-color-danger)',
                    borderRadius: '12px',
                  }}
                />
                <IonCardHeader style={{ padding: '16px 8px 0' }}>
                  <IonCardTitle>Indra Prasetya Hadiwana</IonCardTitle>
                  <p>00000028935</p>
                </IonCardHeader>
                <IonCardContent style={{ padding: '0 8px 8px' }}>
                  <hr
                    style={{
                      borderBottom: '2px solid var(--ion-color-danger)',
                      margin: '18px 0 12px',
                    }}
                  />
                  <IonButton
                    fill="clear"
                    href="https://github.com/indrasb"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <IonIcon
                      icon={logoGithub}
                      color="danger"
                      style={{ fontSize: '2em' }}
                    />
                  </IonButton>
                </IonCardContent>
              </IonCard>
            </IonCol>

            <IonCol sizeLg="6" sizeMd="6" sizeSm="6" sizeXs="12">
              <IonCard
                color="secondary"
                style={{
                  borderRadius: '18px',
                  padding: '8px',
                  margin: '0 8px 12px',
                }}
              >
                <img
                  src={rezalutfi}
                  alt="Muhammad Rezalutfi"
                  style={{
                    border: '3px solid var(--ion-color-danger)',
                    borderRadius: '12px',
                  }}
                />
                <IonCardHeader style={{ padding: '16px 8px 0' }}>
                  <IonCardTitle>Muhammad Rezalutfi</IonCardTitle>
                  <p>00000028098</p>
                </IonCardHeader>
                <IonCardContent style={{ padding: '0 8px 8px' }}>
                  <hr
                    style={{
                      borderBottom: '2px solid var(--ion-color-danger)',
                      margin: '18px 0 12px',
                    }}
                  />
                  <IonButton
                    fill="clear"
                    href="https://github.com/Rezalutfi22"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <IonIcon
                      icon={logoGithub}
                      color="danger"
                      style={{ fontSize: '2em' }}
                    />
                  </IonButton>
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default About;
