import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';

import {popularProducts} from '../data';
import {Product} from '.';
import axios from 'axios';

const Products = ({cat, sort, filters,homepage,navigate}) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  console.log(
    '🚀 ~ file: Products.js ~ line 10 ~ Products ~ products',
    products,
  );

  console.log('🚀 ~ file: Products.js ~ line 8 ~ Products ~ filters', filters);
  console.log('🚀 ~ file: Products.js ~ line 8 ~ Products ~ sort', sort);
  console.log('🚀 ~ file: Products.js ~ line 8 ~ Products ~ cat', cat);

  const fetchData = async () => {
    try {
      const res = await axios.get(
        cat && cat !== null && cat !== undefined
          ? `https://mern-e-commerce-api.herokuapp.com/api/products?category=${cat}`
          : 'https://mern-e-commerce-api.herokuapp.com/api/products',
      );
      if (cat === 'summer' || cat === 'winter' || cat === 'accessories') {
        const filteredData = res?.data.filter(product => {
          return product.inSale === true;
        });
        setProducts(filteredData);
      } else {
        setProducts(res?.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getFilteredData = () => {
    cat &&
      setFilteredProducts(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  };

  const getSortedData = () => {
    if (sort === "newest") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt))
      );
    } else if (sort === "asc") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    }
  };

  useEffect(() => {
    fetchData();
  }, [cat]);
  useEffect(() => {
    fetchData();
  }, []);
  useEffect(() => {
    getFilteredData();
  }, [products, cat, filters]);
  useEffect(() => {
    getSortedData();
  }, [sort]);

  return (
    <View style={styles.container}>
      { homepage
        ? products
            .sort((a, b) => b.salesAmount - a.salesAmount)
            .slice(0, 8)
            .map((item) => <Product item={item} key={item._id} navigate={navigate}/>)
        : filteredProducts.map((item) => (
            <Product item={item} key={item._id} navigate={navigate}/>
          ))}
    </View>
  );
};

export {Products};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
