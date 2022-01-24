import {SafeAreaView, StyleSheet, Text, View, ScrollView,Dimensions} from 'react-native';
import React,{useEffect, useState} from 'react';

import {
  Announcement,
  Categories,
  Navbar,
  Slider,
  SliderDesc,
  Footer,
  Newsletter,
  Products
} from '../components';

import AsyncStorage from '@react-native-async-storage/async-storage';

const Home = (props) => {

  const [token,setToken] = useState(null)
  console.log("🚀 ~ file: Home.js ~ line 20 ~ Home ~ token", token)

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('@current_User')
      if(value !== null) {
        setToken(value)
      }
    } catch(e) {
      console.log(e);
    }
  }
 
  useEffect(()=>{
    getData()
  },[])
  
  
  return (
    <SafeAreaView>
      <ScrollView showsHorizontalScrollIndicator={false}>
        <Announcement />
        <Navbar navigate = {props.navigation.navigate}/>
        <SliderDesc />
        <Slider />
        <Categories />
        <View style={styles.container}>
          <Text style={styles.title}>Most Populer Products</Text>
        </View>
        <Products homepage/>
        <Newsletter/>
        <Footer/>

      </ScrollView>
    </SafeAreaView>
  );
};

export {Home};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'floralwhite',
    marginBottom:10,
    width: Dimensions.get("window").width *0.9,
    alignSelf:"center"
  },
  title: {
    textAlign: 'center',
    fontSize: 24,
    padding: 10,
    color: "#80cbc4"
  },
});
