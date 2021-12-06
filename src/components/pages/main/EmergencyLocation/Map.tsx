import {
  GoogleMap,
  InfoWindow,
  Marker,
  useLoadScript,
} from '@react-google-maps/api';
import { klikDarurat } from 'assets';

import googleMapConfig from 'config/googleMap.config';

import styles from 'styles/main/EmergencyLocation.module.scss';

type Coordinates = {
  lat: number;
  lng: number;
};

const options: google.maps.MapOptions = {
  disableDefaultUI: true,
  zoomControl: true,
};

const icon: any = {
  url: klikDarurat,
  scaledSize: { width: 32, height: 32 },
};

type MapProps = {
  onLoad: (map: any) => void;
  currentPosition: Coordinates;
  nearbyPlaces: google.maps.places.PlaceResult[] | null;
  placeDetail: google.maps.places.PlaceResult | null;
  setPlaceDetail: (place: google.maps.places.PlaceResult | null) => void;
};

const Map: React.FC<MapProps> = ({
  onLoad,
  currentPosition,
  nearbyPlaces,
  placeDetail,
  setPlaceDetail,
}) => {
  const { isLoaded, loadError } = useLoadScript(googleMapConfig);

  return (
    <>
      {isLoaded && (
        <div className={styles.mapWrapper}>
          <GoogleMap
            id="map"
            onLoad={onLoad}
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
                <div className={styles.infoWindow}>
                  <h2>{placeDetail.name}</h2>
                  <p>{placeDetail.vicinity}</p>
                </div>
              </InfoWindow>
            )}
          </GoogleMap>
        </div>
      )}

      {loadError && <h1>Google maps Error!</h1>}
    </>
  );
};

export default Map;
