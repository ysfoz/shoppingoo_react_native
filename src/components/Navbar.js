import {StyleSheet, Text, View, Image, SafeAreaView} from 'react-native';
import React from 'react';

import logo from '../assets/logo1.png';
import profile from '../assets/avatar.jpeg';
import cart from '../assets/cart.png';

const Navbar = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <View>
          <Image source={logo} style={styles.logo} />
        </View>
        <Text style={styles.title}>Shoppingoo</Text>
        <View style={styles.right}>
          <Image source={cart} style={styles.logo} />
          <Image source={profile} style={[styles.logo, {borderRadius: 20}]} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export {Navbar};

const styles = StyleSheet.create({
  container: {},
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 60,
    backgroundColor: 'floralwhite',
  },
  title: {
    color: '#80cbc4',
    fontSize: 20,
    fontWeight: 'bold',
  },
  logo: {
    width: 40,
    height: 40,
    marginLeft: 6,
  },
  right: {
    flexDirection: 'row',
  },
});
