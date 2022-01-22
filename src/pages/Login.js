import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React from 'react';

import {CostumInput} from '../components';

const Login = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.text}>SIGN IN</Text>
        <CostumInput placeholder="username" />
        <CostumInput placeholder="password" />

       
          <TouchableOpacity style={styles.bottomButton}>
            <Text>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.bottomButton}>
            <Text>Create a new Account</Text>
          </TouchableOpacity>
        
      </View>
    </SafeAreaView>
  );
};

export {Login};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {
    flex: 1,
    backgroundColor: '#80cbc4',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  text: {
    marginBottom: 20,
    fontSize: 24,
  },


  bottomButton: {
    width: Dimensions.get('window').width * 0.8,
    borderWidth: 3,
    borderColor: '#fff',
    padding: 8,
    borderRadius: 4,
    alignItems: 'center',
    marginBottom:10
  },
});
