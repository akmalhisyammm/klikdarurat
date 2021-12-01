import {
  IonChip,
  IonFab,
  IonFabButton,
  IonIcon,
  IonSearchbar,
  IonToolbar,
} from '@ionic/react';
import { Geolocation } from '@capacitor/geolocation';
import { GoogleMap, Marker } from '@react-google-maps/api';
import { locateOutline } from 'ionicons/icons';
import { useEffect, useState } from 'react';

import Layout from 'components/layout';

interface Coordinates {
  lat: number;
  lng: number;
}

interface Location {
  center: {
    lat: any;
    lng: any;
  };
  coordsResult: [];
}

const EmergencyLocation: React.FC = () => {
  const [currentPosition, setCurrentPosition] = useState<Coordinates>({
    lat: -6.257377926995551,
    lng: 106.61829861017398,
  });
  const [emergencyLocation, setEmergencyLocation] = useState<Location>({
    center: currentPosition,
    coordsResult: [],
  });
  const [isGetCurrentPosition, setIsGetCurrentPosition] =
    useState<boolean>(true);

  useEffect(() => {
    getCurrentPosition();
    setIsGetCurrentPosition(false);
  }, [isGetCurrentPosition]);

  const getCurrentPosition = async () => {
    const coordinates = await Geolocation.getCurrentPosition({
      enableHighAccuracy: true,
    });

    setCurrentPosition({
      lat: coordinates.coords.latitude,
      lng: coordinates.coords.longitude,
    });
  };

  const onMapLoad = async (map: google.maps.Map) => {
    await getCurrentPosition();

    const request = {
      location: currentPosition,
      radius: 1000,
      type: 'hospital',
    };

    const service = new window.google.maps.places.PlacesService(map);

    const coords: any = [];

    service.nearbySearch(request, (results, status) => {
      if (status === google.maps.places.PlacesServiceStatus.OK && results) {
        for (let i = 0; i < results.length; i++) {
          coords.push(results[i]);
        }

        setEmergencyLocation({
          center: {
            lat: results[0].geometry?.location?.lat,
            lng: results[0].geometry?.location?.lng,
          },
          coordsResult: coords,
        });
      }
    });

    console.log(coords);
  };

  return (
    <Layout title="Lokasi Layanan Darurat">
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
            Rumah Sakit
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
          onLoad={(map) => onMapLoad(map)}
        >
          <Marker position={currentPosition} />

          {emergencyLocation.coordsResult &&
            emergencyLocation.coordsResult.map((result: any, i: number) => (
              <Marker key={i} position={result.geometry.location} />
            ))}
        </GoogleMap>
      </div>

      <IonFab horizontal="start" vertical="bottom" slot="fixed">
        <IonFabButton
          color="primary"
          onClick={() => setIsGetCurrentPosition(true)}
        >
          <IonIcon icon={locateOutline} />
        </IonFabButton>
      </IonFab>
    </Layout>
  );
};

export default EmergencyLocation;
