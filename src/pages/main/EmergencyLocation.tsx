import {
  IonChip,
  IonFab,
  IonFabButton,
  IonIcon,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import { Geolocation } from '@capacitor/geolocation';
import { GoogleMap, Marker, useLoadScript } from '@react-google-maps/api';
import { locateOutline } from 'ionicons/icons';
import { useCallback, useEffect, useRef, useState } from 'react';

import Layout from 'components/layout';

type Coordinates = {
  lat: number;
  lng: number;
};

const options: google.maps.MapOptions = {
  disableDefaultUI: true,
  zoomControl: true,
};

const center: Coordinates = {
  lat: -6.257377926995551,
  lng: 106.61829861017398,
};

const libraries: any = ['places'];

const EmergencyLocation: React.FC = () => {
  const [currentPosition, setCurrentPosition] = useState<Coordinates>(center);
  const [nearbyPlaces, setNearbyPlaces] = useState<
    google.maps.places.PlaceResult[]
  >([]);

  const { isLoaded, loadError } = useLoadScript({
    id: 'map',
    googleMapsApiKey: `${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`,
    libraries,
  });

  const mapRef = useRef<google.maps.Map>();

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

  const onMapLoad = useCallback((map) => {
    mapRef.current = map;
  }, []);

  const fetchPlaces = async (keyword?: string) => {
    const request = {
      location: currentPosition,
      radius: 2000,
      type: keyword ?? 'hospital',
    };

    if (!mapRef.current) return;

    const service = new window.google.maps.places.PlacesService(mapRef.current);

    service.nearbySearch(request, (results, status) => {
      if (status === google.maps.places.PlacesServiceStatus.OK && results) {
        console.log(results);
        setNearbyPlaces(results);
      }
    });
  };

  return (
    <Layout title="Lokasi Layanan Darurat">
      <IonToolbar color="primary">
        <IonTitle className="ion-margin-vertical">Pilih Lokasi</IonTitle>
        <div
          style={{
            margin: '12px',
            overflow: 'auto',
            whiteSpace: 'nowrap',
          }}
        >
          <IonChip
            outline
            style={{ borderColor: '#ffffff' }}
            onClick={() => fetchPlaces('hospital')}
          >
            Rumah Sakit
          </IonChip>
          <IonChip
            outline
            style={{ borderColor: '#ffffff' }}
            onClick={() => fetchPlaces('police')}
          >
            Polisi
          </IonChip>
          <IonChip
            outline
            style={{ borderColor: '#ffffff' }}
            onClick={() => fetchPlaces('fire_station')}
          >
            Stasiun Damkar
          </IonChip>
        </div>
      </IonToolbar>

      {isLoaded && (
        <div style={{ width: '100%', height: '100%', paddingBottom: '112px' }}>
          <GoogleMap
            id="map"
            onLoad={onMapLoad}
            mapContainerStyle={{
              width: '100%',
              height: '100%',
            }}
            center={currentPosition}
            zoom={15}
            options={options}
          >
            <Marker position={currentPosition} />

            {nearbyPlaces &&
              nearbyPlaces.map(
                (place: google.maps.places.PlaceResult, i: number) => (
                  <Marker
                    key={i}
                    position={place.geometry?.location as google.maps.LatLng}
                  />
                )
              )}
          </GoogleMap>
        </div>
      )}

      {loadError && <h1>Google maps Error!</h1>}

      <IonFab horizontal="start" vertical="bottom" slot="fixed">
        <IonFabButton color="primary" onClick={getCurrentPosition}>
          <IonIcon icon={locateOutline} />
        </IonFabButton>
      </IonFab>
    </Layout>
  );
};

export default EmergencyLocation;
