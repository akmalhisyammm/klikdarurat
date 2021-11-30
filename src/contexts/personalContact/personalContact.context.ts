import { createContext } from 'react';
import { PersonalContact } from 'types/personalContact';

interface Context {
  contacts: PersonalContact[];
  addContact: (name: string, phoneNumber: string) => void;
  updateContact: (id: string, name: string, phoneNumber: string) => void;
  deleteContact: (id: string) => void;
}

export const PersonalContactContext = createContext<Context>({
  contacts: [],
  addContact: () => {},
  updateContact: () => {},
  deleteContact: () => {},
});
