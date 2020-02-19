import React from 'react';
import { Icon } from 'antd';
import { ReactComponent as GeoIcon } from 'assets/svg/gps.svg';
import GoogleMapReact from 'google-map-react';
import PropTypes from 'prop-types';

const Marker = () => <Icon component={GeoIcon} style={{ fontSize: 18 }} />;

const GoogleMap = ({ width, height, lat, lng, zoom, defaultCenter }) => {
  return (
    <div style={{ width, height }}>
      <GoogleMapReact
        center={{
          lat,
          lng,
        }}
        defaultCenter={defaultCenter}
        defaultZoom={zoom}
      >
        <Marker lat={lat} lng={lng} />
      </GoogleMapReact>
    </div>
  );
};

GoogleMap.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  lat: PropTypes.number,
  lng: PropTypes.number,
  defaultCenter: PropTypes.object,
  zoom: PropTypes.number,
};

export default GoogleMap;
