import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  Image,
  TouchableHighlight,
} from 'react-native';
import React from 'react';

import {sliderItems} from '../data';

const Slider = () => {
  return (
    // id: 1,
    // img:"https://www.pngarts.com/files/2/Model-PNG-High-Quality-Image.png",

    // title: "SUMMER SALE",
    // desc: "DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.",
    // bg: "fbf0f4",
    // cat:"summer"

    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.container}>
      {sliderItems.map((item, index) => {
        return (
          <View key={index} style={styles.wrapper}>
            <Image
              source={{uri: item.img}}
              style={[styles.img, {backgroundColor: item.bg}]}
            />
            <Text style={styles.title}>{item.title}</Text>
            <TouchableOpacity style={styles.button}>
              <Text>Show More</Text>
            </TouchableOpacity>
          </View>
        );
      })}
    </ScrollView>
  );
};

export {Slider};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    overflow: 'hidden',
  },
  wrapper: {
    height: '100%',
  },
 
  imgContainer: {
    backgroundColor: 'red',
  },
  img: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height / 2.8,
    resizeMode: 'contain',

  },
  title: {
    position: 'absolute',
    right: 20,
    top:20, 
  },
 
  button: {
    position: 'absolute',
    width: 100,
    right: 20,
    top:60, 
    backgroundColor:"#80cbc4",
    padding: 6,
    alignItems:"center",
    borderRadius:4

  },
});
