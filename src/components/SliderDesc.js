import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const SliderDesc = (props) => {
  return (
    <View style={styles.container}>
      <Text >Get flat 30% off for new arrivals!!!.</Text>
    </View>
  );
};

export {SliderDesc};

const styles = StyleSheet.create({
  container: {
    height: 20,
    backgroundColor: '#80cbc4',
    
    alignItems: "center",
    justifyContent: "center",
    fontSize:12
  },
  
});
