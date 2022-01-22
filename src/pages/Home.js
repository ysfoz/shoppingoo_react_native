import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React from 'react';

import { Announcement,Categories,Navbar,Slider } from '../components';

const Home = () => {
  return (
    <SafeAreaView>

    <View>
      <Announcement/>
      <Navbar/>
      <Slider/>
      <Categories/>
    </View>
    </SafeAreaView>
  );
};

export { Home };

const styles = StyleSheet.create({});
