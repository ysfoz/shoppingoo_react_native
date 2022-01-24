import {StyleSheet, Text, View, Dimensions, ScrollView} from 'react-native';
import React from 'react';

import {
  FilterItem,
  Navbar,
  Announcement,
  Newsletter,
  Footer,
  Products,
} from '../components';
import {popularProducts} from '../data';

const ProductsList = (props) => {
  return (
    <ScrollView>
      <Navbar navigate = {props.navigation.navigate} />
      <Announcement />
      <Text style={styles.title}>Dresses</Text>
      <View style={styles.buttonContainer}>
        <Text style={styles.text}>Sizes</Text>
        <FilterItem size="XS" />
        <FilterItem size="S" />
        <FilterItem size="M" />
        <FilterItem size="L" />
        <FilterItem size="XL" />
      </View>
      <View style={styles.buttonContainer}>
        <Text style={styles.text}>Colors</Text>
        <FilterItem color="blue" />
        <FilterItem color="yellow" />
        <FilterItem color="white" />
        <FilterItem color="black" />
        <FilterItem color="green" />
        <FilterItem color="red" />
      </View>
      <View style={styles.buttonContainer}>
        <Text style={styles.text}>Filters</Text>
        <FilterItem size="NEW" width />
        <FilterItem size="Price(asc)" width />
        <FilterItem size="Price(desc)" width />
      </View>
      <Products />
      <Newsletter />
      <Footer />
    </ScrollView>
  );
};

export {ProductsList};

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    marginHorizontal: 10,
    marginVertical: 10,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  text: {
    width: Dimensions.get('screen').width * 0.13,
  },
  filter: {
    width: Dimensions.get('screen').width * 0.4,
  },
});
