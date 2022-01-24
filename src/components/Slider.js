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
import { SliderItem } from '.';

const Slider = (props) => {
  return (

    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.container}>
      {sliderItems.map((item, index) => {
        return (
          <SliderItem key ={index} item={item} navigate={props.navigate}/>
          
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
 
});
