import { useCallback, useEffect, useRef, useState } from 'react';
import {
  IonFab,
  IonFabButton,
  IonIcon,
  IonItem,
  IonLabel,
  IonSelect,
  IonSelectOption,
  IonToolbar
} from '@ionic/react';
import { locateOutline, navigateOutline } from 'ionicons/icons';
import { Geolocation } from '@capacitor/geolocation';

import { Map } from 'components/pages/main/EmergencyLocation';
import Layout from 'components/layout';

import styles from 'styles/main/EmergencyLocation.module.scss';

type Coordinates = {
  lat: number;
  lng: number;
};

// Initial Center: Multimedia Nusantara University
const initialCenter: Coordinates = {
  lat: -6.257377926995551,
  lng: 106.61829861017398
};

const EmergencyLocation: React.FC = () => {
  const [currentPosition, setCurrentPosition] = useState<Coordinates>(initialCenter);
  const [emergencyKeyword, setEmergencyKeyword] = useState<
    'hospital' | 'police' | 'fire_station'
  >();
  const [nearbyPlaces, setNearbyPlaces] = useState<google.maps.places.PlaceResult[] | null>([]);
  const [placeDetail, setPlaceDetail] = useState<google.maps.places.PlaceResult | null>(null);

  const mapRef = useRef<google.maps.Map>();

  useEffect(() => {
    if (emergencyKeyword) {
      const request = {
        location: currentPosition,
        radius: 5000,
        type: emergencyKeyword
      };

      if (!mapRef.current) return;

      const service = new window.google.maps.places.PlacesService(mapRef.current);

      service.nearbySearch(request, (results, status) => {
        if (status === google.maps.places.PlacesServiceStatus.OK && results) {
          setNearbyPlaces(results);
        } else {
          setNearbyPlaces(null);
        }
      });
    }
  }, [currentPosition, emergencyKeyword]);

  const getCurrentPosition = async () => {
    const coordinates = await Geolocation.getCurrentPosition({
      enableHighAccuracy: true
    });

    setCurrentPosition({
      lat: coordinates.coords.latitude,
      lng: coordinates.coords.longitude
    });
  };

  const onMapLoad = useCallback((map) => {
    getCurrentPosition();
    mapRef.current = map;
  }, []);

  return (
    <Layout title="Lokasi Layanan Darurat">
      <IonToolbar color="primary">
        <IonItem className={styles.selectItem}>
          <IonLabel>Lokasi</IonLabel>
          <IonSelect
            value={emergencyKeyword}
            placeholder="Pilih Lokasi Layanan Darurat"
            onIonChange={(e) => setEmergencyKeyword(e.detail.value)}>
            <IonSelectOption value="hospital">Rumah Sakit</IonSelectOption>
            <IonSelectOption value="police">Kantor Polisi</IonSelectOption>
            <IonSelectOption value="fire_station">Stasiun Damkar</IonSelectOption>
          </IonSelect>
        </IonItem>
      </IonToolbar>

      <Map
        onLoad={onMapLoad}
        currentPosition={currentPosition}
        nearbyPlaces={nearbyPlaces}
        placeDetail={placeDetail}
        setPlaceDetail={setPlaceDetail}
      />

      <IonFab horizontal="end" vertical="bottom" slot="fixed">
        {placeDetail && (
          <IonFabButton
            color="danger"
            onClick={() =>
              window.open(
                'https://www.google.com/maps/search/?api=1&query=' +
                  placeDetail.geometry?.location?.lat() +
                  ',' +
                  placeDetail.geometry?.location?.lng()
              )
            }
            className={styles.navigateButton}>
            <IonIcon icon={navigateOutline} />
          </IonFabButton>
        )}
        <IonFabButton color="primary" onClick={getCurrentPosition}>
          <IonIcon icon={locateOutline} />
        </IonFabButton>
      </IonFab>
    </Layout>
  );
};

export default EmergencyLocation;
