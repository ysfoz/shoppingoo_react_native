import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const CartFooter = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.text}>Delete</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.text}>Save for later</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.text}>See more like this</Text>
      </TouchableOpacity>
    </View>
  );
};

export {CartFooter};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    // backgroundColor:"red",
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  button: {
    // backgroundColor:"blue",
    borderLeftWidth: 1,
    // height: 25,
    borderColor: 'lightgray',
    marginHorizontal: 5,
  },
  text: {
    padding: 5,
    color: "slateblue",
    fontSize:16
    
  },
});
