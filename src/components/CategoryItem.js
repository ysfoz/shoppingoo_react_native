import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

const CategoryItem = props => {
  return (
    <View style={styles.container}>
      <Image source={{uri: props.item.img}} style={styles.img} />
      <View style={styles.wrapper}>
        <Text style={styles.title}>{props.item.title}</Text>
        <TouchableOpacity style={styles.button} onPress={()=> props.navigate("productslist",{cat:props?.item?.cat})}>
          <Text>Shop Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export {CategoryItem};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
  },
  img: {
    height: Dimensions.get('window').height * 0.22,
    margin: 10,
    position: 'relative',
  },
  wrapper:{
      position: "absolute",
      top: "30%",
      left:"40%",
      justifyContent:"center",
      alignItems:"center"

  },
  title:{
      color: "#fff",
      marginBottom:20,
      fontWeight:"bold",
      fontSize:18
  },
  button:{
      padding: 10,
      backgroundColor:"#fff",
      borderRadius:4,
      
  }
});

// id: 1,
// img: "https://images.pexels.com/photos/5886041/pexels-photo-5886041.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
// title: "WOMAN",
// cat:"woman"
