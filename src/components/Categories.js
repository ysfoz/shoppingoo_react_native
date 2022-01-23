import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

import { categories } from "../data"
import { CategoryItem } from '.';

const Categories = () => {
  return (
    <View style={styles.container}>
      {categories.map((item) => (
        <CategoryItem item={item} key={item.id} />
      ))}
    </View>
  );
};

export  {Categories};

const styles = StyleSheet.create({
  container:{
    
  }
});

