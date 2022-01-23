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
            <Text style={styles.arrow}>→</Text>
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
    top: 20,
  },
  arrow: {
    position: 'absolute',
    right: 20,
    bottom: 20,
    fontSize: 20,
    fontWeight: 'bold',
  },

  button: {
    position: 'absolute',
    width: 100,
    right: 20,
    top: 60,
    backgroundColor: '#80cbc4',
    padding: 6,
    alignItems: 'center',
    borderRadius: 4,
  },
});
