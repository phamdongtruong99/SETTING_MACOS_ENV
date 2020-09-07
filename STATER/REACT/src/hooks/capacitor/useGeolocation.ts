import { useState, useEffect } from 'react';
import { Plugins } from '@capacitor/core';

let { Geolocation } = Plugins;

const useGeoLocation = () => {
  const [location, setLocation] = useState({});

  const getLocation = async () => {
    const loc = await Geolocation.getCurrentPosition();
    setLocation(loc);
  };

  useEffect(() => {
    getLocation();
  }, []);

  return location;
};

export default useGeoLocation;
