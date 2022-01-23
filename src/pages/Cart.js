import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React from 'react';

import {Navbar, Announcement,CartItem,Footer,Summery} from '../components';

const Cart = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Navbar />
      <Announcement />
      <ScrollView>
        <Text style={styles.title}>Your Bag</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[styles.button, {backgroundColor: '#80cbc4'}]}>
            <Text style={styles.buttonText}>Continue Shopping</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Orders</Text>
          </TouchableOpacity>
        </View>
        <CartItem/>
        <CartItem/>
        <CartItem/>
        <Summery/>
        <Footer/>
      </ScrollView>
    </SafeAreaView>
  );
};

export {Cart};

const styles = StyleSheet.create({
    container:{
marginBottom:60,
    },
  title: {
    fontSize: 34,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: Dimensions.get('screen').width * 0.9,
    alignSelf: 'center',
    marginBottom:10
  },
  button: {
    backgroundColor: 'black',
    borderRadius: 4,
    padding: 6
  },
  buttonText: {
    color: 'white',
    padding: 6,
    fontWeight: 'bold',
  },
});
