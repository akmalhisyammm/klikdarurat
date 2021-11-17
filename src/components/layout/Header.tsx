import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonMenuButton,
  IonBackButton,
} from '@ionic/react';
import React from 'react';

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <IonHeader>
      <IonToolbar color="danger">
        <IonTitle>{title}</IonTitle>

        <IonButtons slot="start">
          {title === 'Tentang' || title === 'Edit Profil' ? (
            <IonBackButton defaultHref="/" />
          ) : (
            <IonMenuButton />
          )}
        </IonButtons>
      </IonToolbar>
    </IonHeader>
  );
};

export default Header;
