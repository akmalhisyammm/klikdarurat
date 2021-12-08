import { createContext } from 'react';
import { PersonalContactData } from 'types/personalContact';

interface Context {
  contacts: PersonalContactData[];
  addContact: (name: string, phoneNumber: string) => void;
  updateContact: (id: string, name: string, phoneNumber: string) => void;
  deleteContact: (id: string) => void;
}

export const PersonalContactContext = createContext<Context>({
  contacts: [],
  addContact: () => null,
  updateContact: () => null,
  deleteContact: () => null
});
