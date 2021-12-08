import { IonApp, IonPage, IonContent, IonSpinner, IonText } from '@ionic/react';

const Loader: React.FC = () => {
  return (
    <IonApp>
      <IonPage>
        <IonContent color="secondary">
          <div
            style={{
              paddingTop: '45vh',
              textAlign: 'center'
            }}>
            <IonSpinner
              style={{
                display: 'block',
                margin: 'auto',
                color: 'white'
              }}
              name="dots"
            />
            <IonText>Mohon Tunggu</IonText>
          </div>
        </IonContent>
      </IonPage>
    </IonApp>
  );
};

export default Loader;
