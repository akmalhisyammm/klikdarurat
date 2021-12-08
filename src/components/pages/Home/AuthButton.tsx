import { IonButton } from '@ionic/react';

const AuthButton: React.FC = () => {
  return (
    <>
      <IonButton shape="round" expand="block" color="primary" routerLink="/login">
        Masuk
      </IonButton>
      <IonButton shape="round" expand="block" color="secondary" routerLink="/register">
        Daftar
      </IonButton>
    </>
  );
};

export default AuthButton;
