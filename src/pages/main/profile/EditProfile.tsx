import { IonAvatar, IonBackButton, IonButton, IonButtons, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonList, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { closeOutline } from 'ionicons/icons';

const EditProfile: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="danger">
          <IonTitle>Edit Profil</IonTitle>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/"/>
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <IonGrid className="ion-text-center">
          <IonRow className="ion-margin-vertical">
            <IonCol>
              <IonAvatar>
                <img src="https://i.pravatar.cc/300"/>
              </IonAvatar>              
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol>
              <IonButton shape="round" color="secondary">PILIH FOTO</IonButton>
            </IonCol>
          </IonRow>

          <IonRow className="ion-margin-vertical">
            <IonCol>
              <IonList>
              <IonItem>
                  <IonLabel position="fixed">
                    Nama
                  </IonLabel>
                  <IonInput placeholder="John Doe"/>
                  <IonIcon icon={closeOutline} slot="end"/>
                </IonItem>

                <IonItem>
                  <IonLabel position="fixed">
                    E-mail
                  </IonLabel>
                  <IonInput placeholder="john.doe@domain.com"/>
                  <IonIcon icon={closeOutline} slot="end"/>
                </IonItem>

                <IonItem>
                  <IonLabel position="fixed">
                    No. Telp
                  </IonLabel>
                  <IonInput placeholder="08123456789"/>
                  <IonIcon icon={closeOutline} slot="end"/>
                </IonItem>

                <IonItem>
                  <IonLabel position="fixed">
                    Alamat
                  </IonLabel>
                  <IonInput placeholder="Jl. Mawar No. 1"/>
                  <IonIcon icon={closeOutline} slot="end"/>
                </IonItem>

              </IonList>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol>
              <IonButton shape="round" expand="block" color="primary">SIMPAN</IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>

    </IonPage>
  );
};

export default EditProfile;
