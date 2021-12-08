import { useState, useEffect, useContext, ReactNode } from 'react';
import { PersonalContactData } from 'types/personalContact';
import { PersonalContactContext } from './personalContact.context';
import {
  getPersonalContacts,
  addPersonalContact,
  editPersonalContact,
  deletePersonalContact
} from 'services/firebase.service';
import { AuthContext } from 'contexts/auth';

type PersonalContactProviderProps = {
  children: ReactNode;
};

export const PersonalContactProvider: React.FC<PersonalContactProviderProps> = ({
  children
}: PersonalContactProviderProps) => {
  const [contacts, setContacts] = useState<PersonalContactData[]>([]);
  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    const fetchPersonalContacts = async () => {
      try {
        const data = await getPersonalContacts(currentUser);

        if (!data) return;

        setContacts(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchPersonalContacts();
  }, [currentUser]);

  const addContact = async (name: string, phoneNumber: string) => {
    try {
      const newContact = await addPersonalContact(currentUser, name, phoneNumber);

      const updatedContacts = [...contacts, newContact];

      setContacts(updatedContacts);
    } catch (error) {
      console.error(error);
      throw new Error('Failed to add new personal contact.');
    }
  };

  const updateContact = async (id: string, name: string, phoneNumber: string) => {
    try {
      const updatedContacts = await editPersonalContact(currentUser, id, name, phoneNumber);

      setContacts(updatedContacts);
    } catch (error) {
      console.error(error);
      throw new Error('Failed to edit personal contact.');
    }
  };

  const deleteContact = async (id: string) => {
    try {
      const updatedContacts = await deletePersonalContact(currentUser, id);

      setContacts(updatedContacts);
    } catch (error) {
      console.error(error);
      throw new Error('Failed to delete personal contact.');
    }
  };

  return (
    <PersonalContactContext.Provider value={{ contacts, addContact, updateContact, deleteContact }}>
      {children}
    </PersonalContactContext.Provider>
  );
};
