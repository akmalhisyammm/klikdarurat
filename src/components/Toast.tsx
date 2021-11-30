import { IonToast } from '@ionic/react';

type ToastProps = {
  message: string;
  setMessage: (message: string) => void;
};

const Toast: React.FC<ToastProps> = ({ message, setMessage }) => {
  return (
    <IonToast
      isOpen={!!message}
      message={message}
      duration={2000}
      onDidDismiss={() => {
        setMessage('');
      }}
    />
  );
};

export default Toast;
