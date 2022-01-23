import {
  Dimensions,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

const Newsletter = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Newsletter</Text>
      <Text style={styles.desc}>
        Get timely updates from your favorite products.
      </Text>
      <View style={styles.inputcontainer}>
        <TextInput style={styles.input} />
        <TouchableOpacity style={styles.button}>
          <Text>Send</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export {Newsletter};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent:"center",
    backgroundColor:"#fcf5f5",
    height: 200,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    
  },
  desc: {},

  input: {
    width: Dimensions.get('window').width * 0.6,
    backgroundColor: '#fff',
    height: 30,
  },
  inputcontainer: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  button: {
    backgroundColor: '#80cbc4',
    width: Dimensions.get('window').width * 0.2,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
