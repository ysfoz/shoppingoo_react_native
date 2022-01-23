import { SafeAreaView, StyleSheet, Text, View,ScrollView } from 'react-native';
import React from 'react';

import { Announcement,Categories,Navbar,Slider,SliderDesc } from '../components';

const Home = () => {
  return (
    <SafeAreaView>

    <ScrollView showsHorizontalScrollIndicator={false}>
      <Announcement/>
      <Navbar/>
      <SliderDesc/>
      <Slider/>
      <Categories/>
    </ScrollView>
    </SafeAreaView>
  );
};

export { Home };

const styles = StyleSheet.create({});
