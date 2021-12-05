import React from 'react';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonMenuButton,
  IonBackButton,
} from '@ionic/react';

type HeaderProps = {
  title: string;
};

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
