import {
  IonButton,
  IonCol,
  IonContent,
  IonFab,
  IonFabButton,
  IonGrid,
  IonHeader,
  IonIcon,
  IonInput,
  IonItem,
  IonItemOption,
  IonItemOptions,
  IonItemSliding,
  IonLabel,
  IonList,
  IonListHeader,
  IonModal,
  IonRow,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import { add, create, swapVerticalOutline, trash } from 'ionicons/icons';
import { useState, useContext, useRef, useEffect } from 'react';

import { PersonalContactContext } from 'contexts/personalContact';
import { PersonalContactData } from 'types/personalContact';
import Layout from 'components/layout';
import Toast from 'components/Toast';
import Alert from 'components/Alert';
import SearchBar from 'components/SearchBar';

const PersonalContact: React.FC = () => {
  const [startDeleting, setStartDeleting] = useState<boolean>(false);
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string>('');
  const [selectedContact, setSelectedContact] =
    useState<PersonalContactData | null>();
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [filteredSearch, setFilteredSearch] = useState<PersonalContactData[]>(
    []
  );
  const [sortOrder, setSortOrder] = useState<boolean>(true);

  const contactsCtx = useContext(PersonalContactContext);

  const slidingOptionsRef = useRef<HTMLIonItemSlidingElement>(null);
  const nameRef = useRef<HTMLIonInputElement>(null);
  const phoneNumberRef = useRef<HTMLIonInputElement>(null);

  useEffect(() => {
    const tempSearchResult = contactsCtx.contacts.filter((contact) =>
      contact.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const sortResult = tempSearchResult.sort((x, y) => {
      const a = x.name;
      const b = y.name;

      if (a === b) return 0;

      return sortOrder ? (a > b ? 1 : -1) : a < b ? 1 : -1;
    });

    setFilteredSearch(sortResult);
  }, [searchQuery, contactsCtx.contacts, sortOrder]);

  const addContactHandler = (name: string, phoneNumber: string) => {
    contactsCtx.addContact(name, phoneNumber);
    setToastMessage('Added Contact!');
  };

  const editContactHandler = (name: string, phoneNumber: string) => {
    if (selectedContact) {
      contactsCtx.updateContact(selectedContact.id, name, phoneNumber);
      setToastMessage('Edited Contact!');
    }
  };

  const deleteContactHandler = () => {
    if (selectedContact) {
      contactsCtx.deleteContact(selectedContact.id);
      setStartDeleting(false);
      setToastMessage('Deleted Contact!');
    }
  };

  const startAddContactHandler = () => {
    console.log('Adding...');
    setIsEditing(true);
    setSelectedContact(null);
  };

  const startEditContactHandler = (contactId: string) => {
    console.log('Editing...');
    slidingOptionsRef.current?.closeOpened();

    const contact = contactsCtx.contacts.find(
      (contact) => contact.id === contactId
    );

    setSelectedContact(contact);
    setIsEditing(true);
  };

  const startDeleteContactHandler = (contactId: string) => {
    console.log('Deleting...');
    slidingOptionsRef.current?.closeOpened();

    const contact = contactsCtx.contacts.find(
      (contact) => contact.id === contactId
    );

    setSelectedContact(contact);
    setStartDeleting(true);
  };

  const cancelEditContactHandler = () => {
    setIsEditing(false);
  };

  const saveContactHandler = () => {
    const enteredName = nameRef.current?.value as string;
    const enteredPhoneNumber = phoneNumberRef.current?.value as string;
    if (!enteredName) return;

    selectedContact
      ? editContactHandler(enteredName, enteredPhoneNumber)
      : addContactHandler(enteredName, enteredPhoneNumber);

    setIsEditing(false);
  };

  return (
    <>
      <Alert
        isOpen={startDeleting}
        header="Apakah Anda yakin?"
        message="Apakah Anda ingin menghapus kontak ini?"
        onActionClick={deleteContactHandler}
        onCancelClick={setStartDeleting}
      />

      <Toast message={toastMessage} setMessage={setToastMessage} />

      <IonModal isOpen={isEditing}>
        <IonHeader>
          <IonToolbar color="secondary">
            <IonTitle>
              {selectedContact ? 'Edit Kontak' : 'Tambah Kontak'}
            </IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonContent>
          <IonGrid>
            <IonRow>
              <IonCol>
                <IonItem>
                  <IonLabel position="floating">Nama</IonLabel>
                  <IonInput
                    type="text"
                    ref={nameRef}
                    value={selectedContact?.name}
                  />
                </IonItem>
                <IonItem>
                  <IonLabel position="floating">Nomor Telepon</IonLabel>
                  <IonInput
                    type="tel"
                    ref={phoneNumberRef}
                    value={selectedContact?.phoneNumber}
                  />
                </IonItem>
              </IonCol>
            </IonRow>

            <IonRow className="ion-text-center">
              <IonCol>
                <IonButton
                  color="primary"
                  expand="block"
                  fill="solid"
                  onClick={saveContactHandler}
                >
                  Simpan
                </IonButton>
              </IonCol>
              <IonCol>
                <IonButton
                  color="danger"
                  expand="block"
                  fill="outline"
                  onClick={cancelEditContactHandler}
                >
                  Batalkan
                </IonButton>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonContent>
      </IonModal>

      <Layout title="Kontak Darurat">
        <IonToolbar color="primary">
          <SearchBar query={setSearchQuery} />
        </IonToolbar>

        <IonList>
          <IonListHeader>
            <IonLabel color="primary">{sortOrder ? 'A-Z' : 'Z-A'}</IonLabel>
            <IonButton
              fill="clear"
              onClick={() =>
                sortOrder ? setSortOrder(false) : setSortOrder(true)
              }
            >
              <IonIcon icon={swapVerticalOutline} />
            </IonButton>
          </IonListHeader>
          {contactsCtx.contacts.length ? (
            filteredSearch.map((contact) => (
              <IonItemSliding key={contact.id} ref={slidingOptionsRef}>
                <IonItemOptions side="end">
                  <IonItemOption
                    color="warning"
                    onClick={startEditContactHandler.bind(null, contact.id)}
                  >
                    <IonIcon icon={create} slot="icon-only" />
                  </IonItemOption>

                  <IonItemOption
                    color="danger"
                    onClick={startDeleteContactHandler.bind(null, contact.id)}
                  >
                    <IonIcon icon={trash} slot="icon-only" />
                  </IonItemOption>
                </IonItemOptions>

                <IonItem
                  lines="full"
                  button
                  href={'tel:' + contact.phoneNumber}
                >
                  <IonLabel>{contact.name}</IonLabel>
                </IonItem>
              </IonItemSliding>
            ))
          ) : (
            <IonItem className="ion-text-center">
              <IonLabel>Belum ada kontak.</IonLabel>
            </IonItem>
          )}
        </IonList>

        <IonFab vertical="bottom" horizontal="end" slot="fixed">
          <IonFabButton onClick={startAddContactHandler}>
            <IonIcon icon={add} />
          </IonFabButton>
        </IonFab>
      </Layout>
    </>
  );
};

export default PersonalContact;
