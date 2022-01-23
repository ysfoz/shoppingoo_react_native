import {Dimensions, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const Summery = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>ORDER SUMMERY</Text>
      <View style={styles.wrapper}>
        <Text style={styles.text}>Subtotal</Text>
        <Text style={styles.price}>$ 70</Text>
      </View>
      <View style={[styles.wrapper,{paddingBottom:0}]}>
        <Text style={styles.text}>Estimated Shipping</Text>
        <Text style={styles.price}>$ 5.90</Text>
      </View>
        <Text style={styles.discount}>On purchases $60 or more, shipping is FREE!!!</Text>
      <View style={styles.wrapper}>
        <Text style={styles.text}>Shipping Discount</Text>
        <Text style={styles.price}>$ -5.90</Text>
      </View>
      <View style={styles.wrapper}>
        <Text style={[styles.text,{fontWeight:"bold"}]}>Total</Text>
        <Text style={[styles.price,{fontWeight:"bold"}]}>$ 70</Text>
      </View>
      <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Checkout Now</Text>
      </TouchableOpacity>
    </View>
  );
};

export {Summery};

const styles = StyleSheet.create({
  container: {
    // backgroundColor:"azure",
    borderWidth: 0.5,
    padding: 10,
    height: Dimensions.get('screen').height * 0.45,
    borderRadius: 10,
    margin: 10,
    justifyContent:"center"
  },
  title: {
      fontSize:24,
      textAlign:"center",
  },
  wrapper: {
      flexDirection:"row",
      justifyContent:"space-between",
      padding: 10
  },
  text: {
      fontSize:20,
  },
  price: {
    fontSize:18,
  },
  discount:{
      fontSize:10,
      color: "blueviolet"
  },
  button:{
      backgroundColor:"black",
      width: 250,
      justifyContent:"center",
      alignItems:"center",
      alignSelf:"center",
      margin: 10,
      borderRadius:4
  },
  buttonText:{
      color:"white",
      padding: 10,
      fontWeight:"bold"
  }
});
