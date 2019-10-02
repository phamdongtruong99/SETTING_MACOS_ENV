import React from 'react';
import { FlatList } from 'react-native';
import ListItem from './ListItem';
// import PropTypes from 'prop-types';

const PlaceList = ({ places, onItemSelected }) => {
  return (
    <FlatList
      style={styles.listContainer}
      data={places}
      renderItem={info => (
        <ListItem
          placeName={info.item.name}
          placeImage={info.item.image}
          onItemPressed={() => onItemSelected(info.item.key)}
        />
      )}
    />
  );
};

PlaceList.propTypes = {};

export default PlaceList;
