/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable camelcase */
import React, { useContext, useState } from 'react';
import { Form, AutoComplete, notification } from 'antd';
import PropTypes from 'prop-types';
import usePlacesAutocomplete, {
  getLatLng,
  getGeocode,
} from 'use-places-autocomplete';
import RestForm from './RestForm';
import GoogleMap from './GoogleMap';

const { Option } = AutoComplete;

const RestGooglePlaceSearch = ({
  value,
  label,
  required,
  defaultValue,
  message,
  debounce,
  onChange,
  defaultCenter,
  placeholder,
  hasMap,
}) => {
  const { form } = useContext(RestForm);
  const [coordinates, setCoordinates] = useState(defaultCenter);
  const {
    value: search,
    suggestions: { status, data },
    setValue,
  } = usePlacesAutocomplete({
    debounce,
  });

  const handleChange = e => {
    setValue(e);
    onChange(form, e);
    form.setFieldsValue({
      [value]: search,
    });
  };

  const handleSelect = async e => {
    try {
      const results = await getGeocode({ address: e });
      const coordinates = await getLatLng(results[0]);
      setCoordinates(coordinates);
    } catch (error) {
      notification.error('😱 Error: ', error);
    }
  };

  const renderSuggestions = data.map(suggestion => {
    const {
      structured_formatting: { main_text, secondary_text },
    } = suggestion;
    return (
      <Option
        key={`${main_text} ${secondary_text}`}
        value={`${main_text} ${secondary_text}`}
      >
        {`${main_text} ${secondary_text}`}
      </Option>
    );
  });

  return (
    <Form.Item label={label}>
      {form.getFieldDecorator(value, {
        rules: [
          {
            required,
            message,
          },
        ],
        initialValue: defaultValue,
      })(
        <AutoComplete
          dataSource={status === 'OK' && renderSuggestions}
          onChange={handleChange}
          onSelect={handleSelect}
          placeholder={placeholder}
        />,
      )}
      {hasMap && (
        <div style={{ marginTop: '10px' }}>
          <GoogleMap
            lat={coordinates.lat}
            lng={coordinates.lng}
            defaultCenter={defaultCenter}
            zoom={17}
            height="280px"
            width="100%"
          />
        </div>
      )}
    </Form.Item>
  );
};

RestGooglePlaceSearch.propTypes = {
  value: PropTypes.string,
  label: PropTypes.string,
  defaultValue: PropTypes.any,
  required: PropTypes.bool,
  debounce: PropTypes.number,
  message: PropTypes.string,
  onChange: PropTypes.func,
  defaultCenter: PropTypes.object,
  placeholder: PropTypes.string,
  hasMap: PropTypes.bool,
};

RestGooglePlaceSearch.defaultProps = {
  required: true,
  debounce: 300,
  message: 'Không được để trống',
  defaultCenter: {
    lat: 0,
    lng: 0,
  },
  hasMap: true,
};

export default RestGooglePlaceSearch;
