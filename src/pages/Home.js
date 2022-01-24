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
import { setTokenRedux } from '../redux/userRedux';
import { useDispatch } from 'react-redux';

import AsyncStorage from '@react-native-async-storage/async-storage';

const Home = (props) => {
  const dispatch = useDispatch()
  const [token,setToken] = useState(null)
  

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('@current_User')
      if(value !== null) {
        setToken(JSON.parse(value))
      }
    } catch(e) {
      console.log(e);
    }
  }
 
  useEffect(()=>{
    getData()
  },[])

  useEffect(()=>{
dispatch(setTokenRedux(token))
  },[token])
  
  
  return (
    <SafeAreaView>
      <ScrollView showsHorizontalScrollIndicator={false}>
        <Announcement />
        <Navbar navigate = {props.navigation.navigate}/>
        <SliderDesc />
        <Slider navigate = {props.navigation.navigate}/>
        <Categories navigate = {props.navigation.navigate}/>
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
