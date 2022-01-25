import {StyleSheet, Text, View, Dimensions, ScrollView} from 'react-native';
import React, { useState } from 'react';

import {
  FilterItem,
  Navbar,
  Announcement,
  Newsletter,
  Footer,
  Products,
} from '../components';


const ProductsList = (props) => {
  const [cat,setCat] =useState( props?.route?.params?.cat === undefined ? "" : props?.route?.params?.cat)
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("newest");

  
 
  return (
    <ScrollView>
      <Navbar navigate = {props.navigation.navigate} />
      <Announcement />
      <Text style={styles.title}>Dresses</Text>
      <View style={styles.buttonContainer}>
        <Text style={styles.text}>Sizes</Text>
        <FilterItem size="XS" value="xs" name="size" setFilters={setFilters}/>
        <FilterItem size="S" value="s" name="size" setFilters={setFilters}/>
        <FilterItem size="M" value="m" name="size" setFilters={setFilters}/>
        <FilterItem size="L" value="l" name="size" setFilters={setFilters}/>
        <FilterItem size="XL" value="xl" name="size" setFilters={setFilters}/>
      </View>
      <View style={styles.buttonContainer}>
        <Text style={styles.text}>Colors</Text>
        <FilterItem color="blue" value="blue" name="color" setFilters={setFilters}/>
        <FilterItem color="yellow" value="yellow" name="color" setFilters={setFilters}/>
        <FilterItem color="white" value="white" name="color" setFilters={setFilters}/>
        <FilterItem color="black" value="black" name="color" setFilters={setFilters}/>
        <FilterItem color="green" value="green" name="color" setFilters={setFilters}/>
        <FilterItem color="red" value="red" name="color" setFilters={setFilters}/>
      </View>
      <View style={styles.buttonContainer}>
        <Text style={styles.text}>Filters</Text>
        <FilterItem size="NEW" width value="newest" setSort={setSort}/>
        <FilterItem size="Price(asc)" width value="asc" setSort={setSort}/>
        <FilterItem size="Price(desc)" width value="desc" setSort={setSort}/>
      </View>
      <Products cat={cat} filters={filters} sort={sort}/>
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
