import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
} from 'react-native';
import React, {useState} from 'react';

import {Navbar, Announcement} from '../components';

const Product = props => {
  const {product} = props.route.params;
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState('');
  const [color, setColor] = useState('');

  const handleQuantity = type => {
    if (type === 'dec') {
      quantity > 1 && setQuantity(prev => prev - 1);
    } else {
      setQuantity(prev => prev + 1);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Navbar navigate={props.navigation.navigate} />
      <Announcement />
      <View style={styles.upContainer}>
        <Image source={{uri: product?.img}} style={styles.img} />
      </View>

      <View style={styles.downContainer}>
        <View style={styles.namePreis}>
          <Text style={styles.title}>{product?.title}</Text>
          {product?.inSale ? (
            <View style={styles.priceContainer}><Text style={[styles.title, {color:"crimson",textDecorationLine:"line-through",fontSize:16}]}>
              ${Math.floor(product?.price + product?.price * 0.3)}
            </Text>
            <Text style={styles.title}>${product?.price}</Text>
            </View>
          ) : (
            <Text style={styles.title}>${product?.price}</Text>
          )}
        </View>

        <Text style={styles.text}>{product?.desc}</Text>

        <View style={styles.colorContainer}>
          <Text style={styles.title}>Color</Text>
          {product?.color.map((item, index) => (
            <TouchableOpacity key={index} onPress={() => setColor(item)}>
              <View style={[styles.color, {backgroundColor: item}]}></View>
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.colorContainer}>
          <Text style={styles.title}>Size</Text>
          <View style={styles.sizeContainer}>
            {product?.size?.map((item, index) => (
              <TouchableOpacity key={index} onPress={() => setSize(item)}>
                <Text style={styles.size}>{item.toUpperCase()}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
        <View style={styles.quantityContainer}>
          <TouchableOpacity onPress={() => handleQuantity('dec')}>
            <Text style={styles.quantityText}>-</Text>
          </TouchableOpacity>
          <View style={styles.quantityWrapper}>
            <Text style={styles.quantityNumber}>{quantity}</Text>
          </View>
          <TouchableOpacity onPress={() => handleQuantity('inc')}>
            <Text style={styles.quantityText}>+</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.title}>Add Cart</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
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
    height: Dimensions.get('screen').height * 0.3,
    width: Dimensions.get('screen').width * 0.6,
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
    borderWidth: 0.5,
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
  button: {
    width: 150,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end',
    marginRight: 20,
    marginVertical: 20,
    backgroundColor: '#80cbc4',
    borderRadius: 4,
  },
  priceContainer:{
    flexDirection:"row",
    alignItems:"center"
  }
});
