import {StyleSheet, Dimensions, TextInput, View, Text} from 'react-native';
import React from 'react';

const CostumInput = props => {
  return (
    <View>
      {props.text && <Text style={styles.text}>{props.text}</Text>}
      <TextInput
        placeholder={props.placeholder}
        value={props.value}
        style={[styles.input, props.style]}
        onChangeText={props.onChangeText}
        onBlur={props.onBlur}
        secureTextEntry ={props.password}
      />
    </View>
  );
};

export {CostumInput};

const styles = StyleSheet.create({
  input: {
    width: Dimensions.get('window').width * 0.8,
    backgroundColor: '#fff',
    marginBottom: 10,
    height: 40,
    borderRadius: 5,
  },
  text: {
    marginBottom: 2,
    opacity: 0.3,
    marginLeft: 2,
  },
});
