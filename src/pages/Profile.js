import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

import {CostumInput} from '../components';
import avatar from '../assets/avatar.jpeg';

const Profile = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TouchableOpacity>
        <Image style={styles.img} source={avatar} />
      </TouchableOpacity>

      <CostumInput
        value="it will come from db "
        placeholder="username"
        style={styles.input}
        text="username"
      />
      <CostumInput
        value="it will come from db "
        placeholder="Full name"
        style={styles.input}
        text="Full name"
      />
      <CostumInput
        value="it will come from db "
        placeholder="Email"
        style={styles.input}
        text="Email"
      />
      <CostumInput
        value="it will come from db "
        placeholder="password"
        style={styles.input}
        text="password"
      />
      <CostumInput
        value="it will come from db "
        placeholder="street"
        style={styles.input}
        text="street"
      />
      <CostumInput
        value="it will come from db "
        placeholder="city"
        style={styles.input}
        text="city"
      />
      <CostumInput
        value="it will come from db "
        placeholder="Post Code"
        style={styles.input}
        text="Postcode"
      />
      <CostumInput
        value="it will come from db "
        placeholder="Phone"
        style={styles.input}
        text="Phone"
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={[styles.button, {backgroundColor: '#29b6f6'}]}>
          <Text style={styles.buttonText}>Update</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Delete</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export {Profile};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },

  img: {
    width: Dimensions.get('window').width * 0.5,
    height: Dimensions.get('window').height * 0.3,
    borderRadius: 30,
    marginVertical: 10,
  },
  input: {
    height: 40,
    width: Dimensions.get('window').width * 0.9,
  },
  button: {
    backgroundColor: '#ec407a',
    width: Dimensions.get('window').width * 0.43,
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: Dimensions.get('window').width * 0.9,
    marginVertical: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
