import { useEffect, useState } from 'react';
import {
  IonButtons,
  IonChip,
  IonContent,
  IonFab,
  IonFabButton,
  IonHeader,
  IonIcon,
  IonMenuButton,
  IonPage,
  IonSearchbar,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import { Geolocation } from '@capacitor/geolocation';
import { GoogleMap, Marker } from '@react-google-maps/api';
import { locateOutline } from 'ionicons/icons';

interface Coordinates {
  lat: number;
  lng: number;
}

const EmergencyLocation: React.FC = () => {
  const [currentPosition, setCurrentPosition] = useState<Coordinates>({
    lat: -6.257377926995551,
    lng: 106.61829861017398,
  });

  useEffect(() => {
    getCurrentPosition();
  }, []);

  const getCurrentPosition = async () => {
    const coordinates = await Geolocation.getCurrentPosition({
      enableHighAccuracy: true,
    });

    setCurrentPosition({
      lat: coordinates.coords.latitude,
      lng: coordinates.coords.longitude,
    });
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="danger">
          <IonTitle>Lokasi Layanan Darurat</IonTitle>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonToolbar color="primary">
          <IonSearchbar
            color="light"
            placeholder="Cari Lokasi Layanan Darurat..."
            style={{
              '--border-radius': '24px',
              '--box-shadow': '0 0 0 1px var(--ion-color-dark)',
              margin: '12px 0 8px',
              padding: '0 6px',
            }}
          />
          <div
            style={{
              marginBottom: '12px',
              overflow: 'auto',
              whiteSpace: 'nowrap',
            }}
          >
            <IonChip outline style={{ borderColor: '#ffffff' }}>
              Relevansi
            </IonChip>
            <IonChip outline style={{ borderColor: '#ffffff' }}>
              Sedang Buka
            </IonChip>
            <IonChip outline style={{ borderColor: '#ffffff' }}>
              Rating Tertinggi
            </IonChip>
          </div>
        </IonToolbar>
        <div style={{ width: '100%', height: '100%', paddingBottom: '112px' }}>
          <GoogleMap
            mapContainerStyle={{
              width: '100%',
              height: '100%',
            }}
            center={currentPosition}
            zoom={14}
          >
            <Marker position={currentPosition} />
          </GoogleMap>
        </div>

        <IonFab horizontal="start" vertical="bottom" slot="fixed">
          <IonFabButton color="primary" onClick={getCurrentPosition}>
            <IonIcon icon={locateOutline} />
          </IonFabButton>
        </IonFab>
      </IonContent>
    </IonPage>
  );
};

export default EmergencyLocation;
