import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

import {Navbar, Announcement} from '../components';

import {popularProducts} from '../data';
import cart from '../assets/cart.png';

const Product = () => {
  return (
    <View style={styles.container}>
      <Navbar />
      <Announcement />
      <View style={styles.upContainer}>
        <Image source={cart} style={styles.img} />
      </View>

      <View style={styles.downContainer}>
        <View style={styles.namePreis}>
          <Text style={styles.title}>product name</Text>
          <Text style={styles.title}>$122</Text>
        </View>

        <Text style={styles.text}>product desc</Text>

        <View style={styles.colorContainer}>
          <Text style={styles.title}>Color</Text>
          <View style={styles.color}></View>
          <View style={styles.color}></View>
          <View style={styles.color}></View>
        </View>
        <View style={styles.colorContainer}>
          <Text style={styles.title}>Size</Text>
          <View style={styles.sizeContainer}>
            <TouchableOpacity>
              <Text style={styles.size}>S</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.size}>L</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.size}>XL</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.quantityContainer}>
          <TouchableOpacity>
            <Text style={styles.quantityText}>-</Text>
          </TouchableOpacity>
          <View style={styles.quantityWrapper}>
            <Text style={styles.quantityNumber}>3</Text>
          </View>
          <TouchableOpacity>
            <Text style={styles.quantityText}>+</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.title}>Add Cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export {Product};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  upContainer: {
    flex: 1,

    justifyContent: 'center',
    alignItems: 'center',
  },
  downContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginLeft: 20,
  },
  img: {
    width: Dimensions.get('screen').width * 0.8,
    resizeMode: 'contain',
  },
  text: {
    fontSize: 12,
    margin: 5,
  },
  title: {
    fontSize: 20,
    margin: 5,

    fontWeight: 'bold',
  },
  color: {
    width: 30,
    height: 30,
    borderRadius: 30,
    backgroundColor: 'yellow',
    margin: 5,
    marginHorizontal: 10,
  },
  colorContainer: {
    flexDirection: 'row',
  },
  quantityContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  quantityWrapper: {
    width: 45,
    height: 45,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderColor: '#80cbc4',
  },
  quantityText: {
    fontSize: 35,
    marginHorizontal: 20,
    fontWeight: 'bold',
  },
  quantityNumber: {
    fontSize: 20,
    padding: 10,
    fontWeight: 'bold',
  },
  namePreis: {
    flexDirection: 'row',
  },
  sizeContainer: {
    flexDirection: 'row',
  },
  size: {
    fontSize: 20,
    margin: 5,
    marginHorizontal: 20,
    fontWeight: 'bold',
  },
  button:{
    width: 150,
    justifyContent:"center",
    alignItems:"center",
    alignSelf:"flex-end",
    marginRight:20,
    marginVertical:20,
    backgroundColor:"#80cbc4",
    borderRadius:4
    
  }
});
