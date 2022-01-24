import {StyleSheet, Text, View, Image, SafeAreaView, TouchableOpacity,Alert} from 'react-native';
import React, { useState } from 'react';
import { useDispatch,useSelector } from 'react-redux';

import logo from '../assets/logo1.png';
import profile from '../assets/avatar.jpeg';
import cart from '../assets/cart.png';
import exit from '../assets/exit.png';

import { logout } from '../helper/requestMethods';

const Navbar = (props) => {
  const dispatch = useDispatch()
  const currentUser = useSelector(state => state.user.currentUser)
  

  const confirmLogout = () =>
    Alert.alert(
      "Shoppingoo",
      "Are you sure to exit",
      [
        {
          text: "Cancel",
          onPress: () => console.log("OK Pressed"),
          style: "cancel"
        },
        { text: "Exit", onPress: () => logout(dispatch) }
      ]
    );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <View>
          <TouchableOpacity onPress={()=> props.navigate("home")}>

          <Image source={logo} style={styles.logo} />
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={()=> props.navigate("home")}>
        <Text style={styles.title}>Shoppingoo</Text>
        </TouchableOpacity>
        <View style={styles.right}>
        <TouchableOpacity onPress={()=> props.navigate("cart")}>
          <Image source={cart} style={styles.logo} />
          </TouchableOpacity>

          { currentUser ?
          <>
          <TouchableOpacity onPress={(confirmLogout)} style={{justifyContent:"center"}}>
          <Image source={exit} style={[styles.logo,{width:30,height:30,resizeMode:"contain"}]} />
          </TouchableOpacity>
          <TouchableOpacity onPress={()=> props.navigate("profile")}>
          <Image source={ currentUser?.img ? {uri:currentUser?.img} : profile} style={[styles.logo, {borderRadius: 20}]} />
          </TouchableOpacity>
          </>
          :
          <View style={styles.userContainer}>
            <TouchableOpacity onPress={()=> props.navigate("login")}>
          <Text style={styles.userText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=> props.navigate("register")}>
          <Text style={styles.userText}>Register</Text>
          </TouchableOpacity>
          </View>
}
        </View>
      </View>
    </SafeAreaView>
  );
};

export {Navbar};

const styles = StyleSheet.create({
  container: {
   
  },
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 60,
    backgroundColor: 'floralwhite',
    position: "relative"
  },
  title: {
    color: '#80cbc4',
    fontSize: 20,
    fontWeight: 'bold',
  },
  logo: {
    width: 40,
    height: 40,
    marginLeft: 6,
  },
  right: {
    flexDirection: 'row',
    marginRight:4
  },
  userContainer: {
    justifyContent:"space-between",
    marginHorizontal:5
  },
  userText:{
    fontSize:16,
  
  }
 
});
