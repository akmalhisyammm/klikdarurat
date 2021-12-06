const libraries: any = ['places'];

const googleMapConfig = {
  id: 'map',
  googleMapsApiKey: `${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`,
  libraries,
};

export default googleMapConfig;
