import { useState } from 'react';
import { PersonalContact } from 'types/personalContact';
import { PersonalContactContext } from './personalContact.context';

export const PersonalContactProvider: React.FC = ({ children }) => {
  const [contacts, setContacts] = useState<PersonalContact[]>([]);

  const addContact = (name: string, phoneNumber: string) => {
    const currIdNumber = contacts.length
      ? contacts[contacts.length - 1].id.replace(/[^0-9]/g, '')
      : 0;

    const newContact: PersonalContact = {
      id: 'PC' + (+currIdNumber + 1),
      name: name,
      phoneNumber: phoneNumber,
    };

    const updatedContacts = [...contacts, newContact];

    setContacts(updatedContacts);
  };

  const updateContact = (id: string, name: string, phoneNumber: string) => {
    const updateContact: PersonalContact = {
      id: id,
      name: name,
      phoneNumber: phoneNumber,
    };

    const updatedContacts = contacts.map((contact) =>
      contact.id === id ? updateContact : contact
    );

    setContacts(updatedContacts);
  };

  const deleteContact = (id: string) => {
    const updatedContacts = contacts.filter((contact) => contact.id !== id);

    setContacts(updatedContacts);
  };

  return (
    <PersonalContactContext.Provider
      value={{ contacts, addContact, updateContact, deleteContact }}
    >
      {children}
    </PersonalContactContext.Provider>
  );
};
