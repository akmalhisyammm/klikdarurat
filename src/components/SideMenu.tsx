import {
  IonMenu,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonMenuToggle,
  IonItem,
  IonIcon,
  IonLabel,
} from '@ionic/react';
import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { AuthContext } from 'contexts/auth';
import { informationCircle, logIn, logOut, personAdd } from 'ionicons/icons';

const SideMenu: React.FC = () => {
  const { currentUser, logout } = useContext(AuthContext);
  const history = useHistory();

  const handleLogout = async () => {
    try {
      await logout();
      history.replace('/');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <IonMenu contentId="main">
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>KlikDarurat</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <IonList>
          <IonMenuToggle autoHide={false}>
            {!currentUser ? (
              <>
                <IonItem button routerLink="/login">
                  <IonIcon slot="start" color="primary" icon={logIn} />
                  <IonLabel>Masuk</IonLabel>
                </IonItem>
                <IonItem button routerLink="/register">
                  <IonIcon slot="start" color="primary" icon={personAdd} />
                  <IonLabel>Daftar</IonLabel>
                </IonItem>
              </>
            ) : (
              <IonItem button onClick={handleLogout}>
                <IonIcon slot="start" color="primary" icon={logOut} />
                <IonLabel>Keluar</IonLabel>
              </IonItem>
            )}
            <IonItem button routerLink="/about">
              <IonIcon slot="start" color="primary" icon={informationCircle} />
              <IonLabel>Tentang</IonLabel>
            </IonItem>
          </IonMenuToggle>
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default SideMenu;
