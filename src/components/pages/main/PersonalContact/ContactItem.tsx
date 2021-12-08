import { IonItemOptions, IonItemOption, IonIcon, IonItem, IonLabel } from '@ionic/react';
import { create, trash } from 'ionicons/icons';
import { PersonalContactData } from 'types/personalContact';

type ContactItemProps = {
  contact: PersonalContactData;
  handleStartEdit: (contactId: string) => void;
  handleStartDelete: (contactId: string) => void;
};

const ContactItem: React.FC<ContactItemProps> = ({
  contact,
  handleStartEdit,
  handleStartDelete
}: ContactItemProps) => {
  return (
    <>
      <IonItemOptions side="end">
        <IonItemOption color="warning" onClick={handleStartEdit.bind(null, contact.id)}>
          <IonIcon icon={create} slot="icon-only" />
        </IonItemOption>

        <IonItemOption color="danger" onClick={handleStartDelete.bind(null, contact.id)}>
          <IonIcon icon={trash} slot="icon-only" />
        </IonItemOption>
      </IonItemOptions>

      <IonItem lines="full" button href={'tel:' + contact.phoneNumber}>
        <IonLabel>{contact.name}</IonLabel>
      </IonItem>
    </>
  );
};

export default ContactItem;
