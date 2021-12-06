import {
  IonModal,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonGrid,
  IonRow,
  IonCol,
  IonButton,
} from '@ionic/react';

type ForgotPasswordModalProps = {
  isOpen: boolean;
  handleSendRequest: () => void;
  onDismiss: (dismiss: boolean) => void;
};

const ForgotPasswordModal: React.FC<ForgotPasswordModalProps> = ({
  isOpen,
  handleSendRequest,
  onDismiss,
  children,
}) => {
  return (
    <IonModal isOpen={isOpen}>
      <IonHeader>
        <IonToolbar color="secondary">
          <IonTitle>Atur Ulang Kata Sandi</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <IonGrid>
          <IonRow>
            <IonCol>{children}</IonCol>
          </IonRow>

          <IonRow className="ion-text-center">
            <IonCol>
              <IonButton
                color="primary"
                expand="block"
                fill="solid"
                shape="round"
                onClick={handleSendRequest}
              >
                Kirim
              </IonButton>
            </IonCol>
            <IonCol>
              <IonButton
                color="danger"
                expand="block"
                fill="outline"
                shape="round"
                onClick={() => onDismiss(false)}
              >
                Batal
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonModal>
  );
};

export default ForgotPasswordModal;
