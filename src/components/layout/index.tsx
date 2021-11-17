import { IonContent, IonPage } from '@ionic/react';
import { ReactNode } from 'react';

import Header from './Header';

interface LayoutProps {
  title?: string;
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ title, children }) => {
  return (
    <IonPage>
      {title && <Header title={title} />}

      <IonContent>{children}</IonContent>
    </IonPage>
  );
};

export default Layout;
