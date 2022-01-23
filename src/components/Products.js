import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

import {popularProducts} from "../data"
import { Product } from '.';

const Products = () => {
  return (
    <View style={styles.container}>
        {popularProducts.map(item => <Product key={item.id} product={item}/>)}
      <Product/>
    </View>
  );
};

export {Products};

const styles = StyleSheet.create({
    container:{
        // flexWrap:"wrap",
        justifyContent:"center",
        alignItems:"center"
    }
});
