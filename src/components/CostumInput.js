import { StyleSheet,  Dimensions, TextInput, View } from 'react-native';
import React from 'react';

const CostumInput = (props) => {
  return (
    <View style={styles.input}>
      <TextInput placeholder={props.placeholder}/>
    </View>
  );
};

export { CostumInput };

const styles = StyleSheet.create({
    input:{
        width: Dimensions.get("window").width * 0.8,
        backgroundColor:"#fff",
        marginBottom:10,
        height: 40,
        borderRadius:5
        
    },
});
