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

type AddContactModalProps = {
  isOpen: boolean;
  onDismiss: (dismiss: boolean) => void;
  type: boolean;
  handleSaveContact: () => void;
};

const AddContactModal: React.FC<AddContactModalProps> = ({
  isOpen,
  onDismiss,
  type,
  handleSaveContact,
  children,
}) => {
  return (
    <IonModal isOpen={isOpen}>
      <IonHeader>
        <IonToolbar color="danger">
          <IonTitle>{type ? 'Edit Kontak' : 'Tambah Kontak'}</IonTitle>
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
                onClick={handleSaveContact}
              >
                Simpan
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
                Batalkan
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonModal>
  );
};

export default AddContactModal;
