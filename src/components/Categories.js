import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';

import { categories } from "../data"
import { CategoryItem } from '.';


const Categories = (props) => {

  return (
    <View style={styles.container}>
      {categories.map((item) => (
        <CategoryItem item={item} key={item.id} navigate={props.navigate} />
      ))}
    </View>
  );
};

export  {Categories};

const styles = StyleSheet.create({
  container:{
    
  }
});

