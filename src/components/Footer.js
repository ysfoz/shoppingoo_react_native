import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

import twitter from '../assets/twitter.png';
import facebook from '../assets/facebook.png';
import instegram from '../assets/instegram.png';
import pinterest from '../assets/pinterest.png';
import mail from '../assets/mail.png';
import phone from '../assets/phone.png';
import map from '../assets/map.png';

const Footer = () => {
  return (
    <View style={styles.container}>
      <View style={styles.upContainer}>
        <Text style={styles.title}>Shoppingo</Text>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
          libero nemo eveniet excepturi et ea tenetur consectetur sint hic
          voluptatibus.
        </Text>
        <View style={styles.logoContainer}>
          <Image source={twitter} style={styles.social} />
          <Image source={facebook} style={styles.social} />
          <Image source={instegram} style={styles.social} />
          <Image source={pinterest} style={styles.social} />
        </View>
      </View>

      <View style={styles.downContainer}>
        <Text style={styles.contactText}>Contact</Text>
        <View style={styles.contactContainer}>
          <Image source={map} style={styles.contact} />
          <Text style={styles.contactInfo}>111 Michigan Ave, Chicago / IL</Text>
        </View>
        <View style={styles.contactContainer}>
          <Image source={phone} style={styles.contact} />
          <Text style={styles.contactInfo}>+1 123 45 67</Text>
        </View>
        <View style={styles.contactContainer}>
          <Image source={mail} style={styles.contact} />
          <Text style={styles.contactInfo}>contact@shopping.com</Text>
        </View>
        <View style={styles.payment}>
          <Image
            source={{uri: 'https://i.ibb.co/Qfvn4z6/payment.png'}}
            style={styles.payment}
          />
        </View>
      </View>
    </View>
  );
};

export {Footer};

const styles = StyleSheet.create({
  container: {
    marginBottom:10,
  },
  upContainer: {
    backgroundColor: 'white',
    padding: 10,
  },
  downContainer: {
    marginBottom:20,
    padding: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingVertical: 10,
  },
  logoContainer: {
    flexDirection: 'row',
    marginTop: 10,
    alignSelf: 'center',
  },
  social: {
    marginLeft: 20,
    width: 30,
    height: 30,
  },
  contactContainer: {
    flexDirection: 'row',
    width: Dimensions.get("window").width * 0.7,
  },
  contactText: {
    fontSize: 18,
    fontWeight: 'bold',

    paddingVertical: 10,
  },
  contact: {
    width: 30,
    height: 30,
    marginBottom:20,
    marginLeft:10,
  },
  contactInfo:{
marginLeft:20,
  },

  payment: {
    height: 25,
    width: '80%',
    resizeMode:"contain",
    alignSelf:"center",
  },
});
