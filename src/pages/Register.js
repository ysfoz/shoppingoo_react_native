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

const Register = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.text}>Create An Account</Text>
        <CostumInput placeholder="username" />
        <CostumInput placeholder="email" />
        <CostumInput placeholder="password" />
        <TouchableOpacity style={styles.button}>
          <Text>Add an profile photo</Text>
        </TouchableOpacity>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.bottomButton}>
            <Text>Create</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.bottomButton}>
            <Text>Sign In</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.notice}>
          By creating an account, I consept to processing of my personal data in
          accordance with the PRIVACY POLICY
        </Text>
      </View>
    </SafeAreaView>
  );
};

export {Register};

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
  button: {
    width: Dimensions.get('window').width * 0.8,
    borderWidth: 3,
    borderColor: '#fff',
    padding: 8,
    borderRadius: 4,
    alignItems: 'center',
  },
  notice: {
    position: 'absolute',
    bottom: 10,
  },
  buttonContainer: {
    flexDirection:'row',
    marginTop:10,
    width: Dimensions.get('window').width * 0.8,
    justifyContent:'space-between'
    
  },
  bottomButton: {
    width: Dimensions.get('window').width * 0.35,
    borderWidth: 3,
    borderColor: '#fff',
    padding: 8,
    borderRadius: 4,
    alignItems: 'center',
  },
});
