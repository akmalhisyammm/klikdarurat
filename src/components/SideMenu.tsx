import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
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
  useIonToast,
} from '@ionic/react';
import { informationCircle, logIn, logOut, personAdd } from 'ionicons/icons';
import { AuthContext } from 'contexts/auth';

const SideMenu: React.FC = () => {
  const { currentUser, logout } = useContext(AuthContext);
  const [presentToast] = useIonToast();
  const history = useHistory();

  const handleLogout = async () => {
    try {
      await logout();

      presentToast({
        message: 'Anda telah keluar.',
        duration: 2000,
        color: 'danger',
      });

      history.replace('/login');
    } catch (err) {
      console.error(err);
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
