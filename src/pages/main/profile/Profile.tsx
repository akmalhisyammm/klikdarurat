import { IonAvatar, IonButton, IonCol, IonContent, IonGrid, IonHeader, IonInput, IonItem, IonLabel, IonList, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';

const Profile: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle slot="start">Profil Saya</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <IonGrid className="ion-text-center">
          <IonRow className="ion-margin-vertical">
            <IonCol>
              <IonAvatar>
                <img src="https://i.pravatar.cc/300"/>
              </IonAvatar>
              <h3 className="ion-text-center">John Doe</h3>
            </IonCol>
          </IonRow>

          <IonRow className="ion-margin-vertical">
            <IonCol>
              <IonList>
                <IonItem>
                  <IonLabel position="fixed">E-mail</IonLabel>
                  <IonInput placeholder="john.doe@domain.com" disabled/>
                </IonItem>

                <IonItem>
                  <IonLabel position="fixed">
                    No. Telp
                  </IonLabel>
                  <IonInput placeholder="08123456789" disabled/>
                </IonItem>

                <IonItem>
                  <IonLabel position="fixed">
                    Alamat
                  </IonLabel>
                  <IonInput placeholder="Jl. Mawar No. 1" disabled/>
                </IonItem>

              </IonList>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol>
              <IonButton shape="round">EDIT PROFIL</IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>

    </IonPage>
  );
};

export default Profile;
