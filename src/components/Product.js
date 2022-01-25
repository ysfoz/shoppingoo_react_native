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
    <View style={[styles.container,{backgroundColor:props.item.inSale ? "rgba(251,233,231,0.3)" :"#f5fbfd"}]}>
      <View style={styles.circle}>
        <TouchableOpacity onPress={()=>props.navigate("product",{product:props.item})}>
          <Image source={{uri: props?.item?.img}} style={styles.img} />
        </TouchableOpacity>
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
