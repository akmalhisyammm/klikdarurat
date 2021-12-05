import {
  IonButton,
  IonFab,
  IonFabButton,
  IonIcon,
  IonInput,
  IonItem,
  IonItemSliding,
  IonLabel,
  IonList,
  IonListHeader,
  IonToolbar,
  useIonActionSheet,
  useIonToast,
} from '@ionic/react';
import { add, swapVerticalOutline, trash } from 'ionicons/icons';
import { useState, useContext, useRef, useEffect } from 'react';

import { PersonalContactContext } from 'contexts/personalContact';
import { PersonalContactData } from 'types/personalContact';
import { AddContactModal, ContactItem } from 'components/main/PersonalContact';
import Layout from 'components/layout';
import SearchBar from 'components/SearchBar';

const PersonalContact: React.FC = () => {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [selectedContact, setSelectedContact] =
    useState<PersonalContactData | null>();
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [filteredSearch, setFilteredSearch] = useState<PersonalContactData[]>(
    []
  );
  const [sortOrder, setSortOrder] = useState<boolean>(true);

  const [presentToast] = useIonToast();
  const [presentActionSheet, dismissActionSheet] = useIonActionSheet();

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
    presentToast({
      message: 'Kontak berhasil ditambahkan.',
      duration: 2000,
      color: 'success',
    });
  };

  const editContactHandler = (name: string, phoneNumber: string) => {
    if (selectedContact) {
      contactsCtx.updateContact(selectedContact.id, name, phoneNumber);
      presentToast({
        message: 'Kontak berhasil diubah.',
        duration: 2000,
        color: 'warning',
      });
    }
  };

  const deleteContactHandler = (selectedContact: PersonalContactData) => {
    contactsCtx.deleteContact(selectedContact.id);
    presentToast({
      message: 'Kontak telah dihapus.',
      duration: 2000,
      color: 'danger',
    });
  };

  const startAddContactHandler = () => {
    setIsEditing(true);
    setSelectedContact(null);
  };

  const startEditContactHandler = (contactId: string) => {
    slidingOptionsRef.current?.closeOpened();

    const contact = contactsCtx.contacts.find(
      (contact) => contact.id === contactId
    );

    setSelectedContact(contact);
    setIsEditing(true);
  };

  const startDeleteContactHandler = (contactId: string) => {
    slidingOptionsRef.current?.closeOpened();

    const contact = contactsCtx.contacts.find(
      (contact) => contact.id === contactId
    );

    if (!contact) return;

    presentActionSheet({
      header: 'Apakah Anda yakin ingin menghapus kontak ini?',
      buttons: [
        {
          text: 'Yakin',
          role: 'destructive',
          icon: trash,
          handler: () => deleteContactHandler(contact),
        },
        {
          text: 'Batalkan',
          role: 'cancel',
          icon: 'close',
          handler: dismissActionSheet,
        },
      ],
    });
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
                <ContactItem
                  contact={contact}
                  handleStartEdit={startEditContactHandler}
                  handleStartDelete={startDeleteContactHandler}
                />
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

      <AddContactModal
        isOpen={isEditing}
        onDismiss={setIsEditing}
        type={!!selectedContact}
        handleSaveContact={saveContactHandler}
      >
        <IonItem>
          <IonLabel position="floating">Nama</IonLabel>
          <IonInput type="text" ref={nameRef} value={selectedContact?.name} />
        </IonItem>

        <IonItem>
          <IonLabel position="floating">Nomor Telepon</IonLabel>
          <IonInput
            type="tel"
            ref={phoneNumberRef}
            value={selectedContact?.phoneNumber}
          />
        </IonItem>
      </AddContactModal>
    </>
  );
};

export default PersonalContact;
