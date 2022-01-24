import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

const Product = props => {
  
  return (
    <View style={styles.container}>
      <View style={styles.circle}>
        <TouchableOpacity>
          <Image source={{uri: props?.product?.img}} style={styles.img} />
        </TouchableOpacity>
        <Text>{props?.product?.id}</Text>
      </View>
    </View>
  );
};

export {Product};

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width * 0.9,
    height: 350,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    backgroundColor: '#f5fbfd',
  },
  img: {
    width: 200,
    height: 300,
    resizeMode: 'contain',
  },
  circle: {
    width: Dimensions.get('window').width * 0.8,
    height: 300,
    backgroundColor: 'white',
    borderRadius: Dimensions.get('window').width * 0.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
