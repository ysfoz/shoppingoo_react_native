import {StyleSheet, Text, View,Dimensions,Image,TouchableOpacity} from 'react-native';
import React from 'react';

const SliderItem = ({item,navigate}) => {
  return (
    <View  style={styles.wrapper}>
      <Image
        source={{uri: item.img}}
        style={[styles.img, {backgroundColor: item.bg}]}
      />
      <Text style={styles.arrow}>→</Text>
      <Text style={styles.title}>{item.title}</Text>
      <TouchableOpacity style={styles.button} onPress={()=>navigate("productslist",{cat:item.cat})}>
        <Text>Show More</Text>
      </TouchableOpacity>
    </View>
  );
};

export {SliderItem};

const styles = StyleSheet.create({
   
      wrapper: {
        height: '100%',
      },
    
      imgContainer: {
        backgroundColor: 'red',
      },
      img: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height / 2.8,
        resizeMode: 'contain',
      },
      title: {
        position: 'absolute',
        right: 20,
        top: 20,
      },
      arrow: {
        position: 'absolute',
        right: 20,
        bottom: 20,
        fontSize: 20,
        fontWeight: 'bold',
      },
    
      button: {
        position: 'absolute',
        width: 100,
        right: 20,
        top: 60,
        backgroundColor: '#80cbc4',
        padding: 6,
        alignItems: 'center',
        borderRadius: 4,
      },
});
