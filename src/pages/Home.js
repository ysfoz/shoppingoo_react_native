import {SafeAreaView, StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';

import {
  Announcement,
  Categories,
  Navbar,
  Slider,
  SliderDesc,
  Footer,
  Newsletter
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
  },
  title: {
    textAlign: 'center',
    fontSize: 24,
    padding: 10,
  },
});
