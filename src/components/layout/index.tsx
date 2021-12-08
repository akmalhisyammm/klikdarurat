import { ReactNode } from 'react';
import { IonContent, IonPage } from '@ionic/react';

import Header from './Header';

type LayoutProps = {
  title?: string;
  children: ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ title, children }: LayoutProps) => {
  return (
    <IonPage>
      {title && <Header title={title} />}

      <IonContent>{children}</IonContent>
    </IonPage>
  );
};

export default Layout;
