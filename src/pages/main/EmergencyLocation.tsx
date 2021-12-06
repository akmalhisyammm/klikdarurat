import { useCallback, useEffect, useRef, useState } from 'react';
import {
  IonFab,
  IonFabButton,
  IonIcon,
  IonItem,
  IonLabel,
  IonSelect,
  IonSelectOption,
  IonToolbar,
} from '@ionic/react';
import { locateOutline, navigateOutline } from 'ionicons/icons';
import { Geolocation } from '@capacitor/geolocation';
import {
  GoogleMap,
  InfoWindow,
  Marker,
  useLoadScript,
} from '@react-google-maps/api';

import Layout from 'components/layout';
import { klikDarurat } from 'assets';

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

const icon: any = {
  url: klikDarurat,
  scaledSize: { width: 32, height: 32 },
};

const EmergencyLocation: React.FC = () => {
  const [currentPosition, setCurrentPosition] = useState<Coordinates>(center);
  const [emergencyKeyword, setEmergencyKeyword] = useState<
    'hospital' | 'police' | 'fire_station'
  >();
  const [nearbyPlaces, setNearbyPlaces] = useState<
    google.maps.places.PlaceResult[] | null
  >([]);
  const [placeDetail, setPlaceDetail] =
    useState<google.maps.places.PlaceResult | null>(null);

  const { isLoaded, loadError } = useLoadScript({
    id: 'map',
    googleMapsApiKey: `${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`,
    libraries,
  });

  const mapRef = useRef<google.maps.Map>();

  useEffect(() => {
    if (emergencyKeyword) {
      const request = {
        location: currentPosition,
        radius: 5000,
        type: emergencyKeyword,
      };

      if (!mapRef.current) return;

      const service = new window.google.maps.places.PlacesService(
        mapRef.current
      );

      service.nearbySearch(request, (results, status) => {
        if (status === google.maps.places.PlacesServiceStatus.OK && results) {
          console.log(results);
          setNearbyPlaces(results);
        } else {
          setNearbyPlaces(null);
        }
      });
    }
  }, [currentPosition, emergencyKeyword]);

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
    getCurrentPosition();
    mapRef.current = map;
  }, []);

  return (
    <Layout title="Lokasi Layanan Darurat">
      <IonToolbar color="primary">
        <IonItem
          style={{
            '--border-radius': '24px',
            margin: '12px 0',
            padding: '0 6px',
          }}
        >
          <IonLabel>Layanan Darurat</IonLabel>
          <IonSelect
            value={emergencyKeyword}
            placeholder="Pilih Lokasi Layanan Darurat"
            onIonChange={(e) => setEmergencyKeyword(e.detail.value)}
          >
            <IonSelectOption value="hospital">Rumah Sakit</IonSelectOption>
            <IonSelectOption value="police">Kantor Polisi</IonSelectOption>
            <IonSelectOption value="fire_station">
              Stasiun Damkar
            </IonSelectOption>
          </IonSelect>
        </IonItem>
      </IonToolbar>

      {isLoaded && (
        <div style={{ width: '100%', height: '100%', paddingBottom: '70px' }}>
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
                    icon={icon}
                    onClick={() => setPlaceDetail(place)}
                  />
                )
              )}

            {placeDetail && (
              <InfoWindow
                position={placeDetail.geometry?.location}
                onCloseClick={() => setPlaceDetail(null)}
              >
                <div style={{ color: 'black' }}>
                  <h2>{placeDetail.name}</h2>
                  <p>{placeDetail.vicinity}</p>
                </div>
              </InfoWindow>
            )}
          </GoogleMap>
        </div>
      )}

      {loadError && <h1>Google maps Error!</h1>}

      <IonFab horizontal="start" vertical="bottom" slot="fixed">
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
            style={{ marginBottom: '8px' }}
          >
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
