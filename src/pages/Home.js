import {SafeAreaView, StyleSheet, Text, View, ScrollView,Dimensions} from 'react-native';
import React from 'react';

import {
  Announcement,
  Categories,
  Navbar,
  Slider,
  SliderDesc,
  Footer,
  Newsletter,
  Products
} from '../components';

const Home = () => {
  return (
    <SafeAreaView>
      <ScrollView showsHorizontalScrollIndicator={false}>
        <Announcement />
        <Navbar />
        <SliderDesc />
        <Slider />
        <Categories />
        <View style={styles.container}>
          <Text style={styles.title}>Most Populer Products</Text>
        </View>
        <Products/>
        <Newsletter/>
        <Footer/>

      </ScrollView>
    </SafeAreaView>
  );
};

export {Home};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'floralwhite',
    marginBottom:10,
    width: Dimensions.get("window").width *0.9,
    alignSelf:"center"
  },
  title: {
    textAlign: 'center',
    fontSize: 24,
    padding: 10,
    color: "#80cbc4"
  },
});
