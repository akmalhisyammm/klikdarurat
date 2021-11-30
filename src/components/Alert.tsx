import { IonAlert } from '@ionic/react';
import React from 'react';

type AlertProps = {
  isOpen: boolean;
  header: string;
  message: string;
  actionHandler: () => void;
  cancelHandler: (isCancel: boolean) => void;
};

const Alert: React.FC<AlertProps> = ({
  isOpen,
  header,
  message,
  actionHandler,
  cancelHandler,
}) => {
  return (
    <IonAlert
      isOpen={isOpen}
      header={header}
      message={message}
      buttons={[
        {
          text: 'No',
          role: 'cancel',
          handler: () => {
            cancelHandler(false);
          },
        },
        { text: 'Yes', handler: actionHandler },
      ]}
    />
  );
};

export default Alert;
