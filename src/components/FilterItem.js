import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

const FilterItem = props => {
 
  return (
    <>
      <TouchableOpacity
      onPress={()=> props.setFilters && props.setFilters !== undefined ? props.setFilters((prev) => ({...prev,[props.name]:props.value})) : props.setSort(props.value) }
        style={
          props.width
            ? styles.filterButton
            : [styles.button, {backgroundColor: props.color && props.color}]
        }>
        <Text  style={styles.sizeText}>{props.size}</Text>
      </TouchableOpacity>
    </>
  );
};

export {FilterItem};

const styles = StyleSheet.create({
  button: {
    height: Dimensions.get('screen').width * 0.1,
    width: Dimensions.get('screen').width * 0.1,
    marginLeft: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    borderWidth: 1,
  },
  filterButton: {
    height: Dimensions.get('screen').width * 0.1,
    width: Dimensions.get('screen').width * 0.25,
    marginLeft: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    borderWidth: 1,
  },
});
