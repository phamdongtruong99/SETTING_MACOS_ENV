export const getGeocode = ({ address, placeId }) => {
  const geocoder = new window.google.maps.Geocoder();

  return new Promise((resolve, reject) => {
    geocoder.geocode({ address, placeId }, (results, status) => {
      if (status !== 'OK') reject(status);
      resolve(results);
    });
  });
};

//github.com/wellyshen/use-places-autocomplete#getgeocode

export const getLatLng = result =>
  new Promise((resolve, reject) => {
    try {
      const { lat, lng } = result.geometry.location;
      resolve({ lat: lat(), lng: lng() });
    } catch (error) {
      reject(error);
    }
  });

// https://github.com/wellyshen/use-places-autocomplete#getLatLng
