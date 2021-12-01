import { IonAlert } from '@ionic/react';
import React from 'react';

type AlertProps = {
  isOpen: boolean;
  header: string;
  message: string;
  onActionClick: () => void;
  onCancelClick: (isCancel: boolean) => void;
};

const Alert: React.FC<AlertProps> = ({
  isOpen,
  header,
  message,
  onActionClick,
  onCancelClick,
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
            onCancelClick(false);
          },
        },
        { text: 'Yes', handler: onActionClick },
      ]}
    />
  );
};

export default Alert;
