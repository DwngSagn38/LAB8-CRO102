import { Button, Image, StyleSheet, Text, View, ScrollView } from 'react-native';
import React from 'react';
import { addItem } from './actions';
import { useDispatch } from 'react-redux';

const ProductList = ({ products }) => {
  const dispatch = useDispatch();

  return (
    <ScrollView horizontal={true} contentContainerStyle={styles.container}>
      {products.map(product => (
        <View key={product.id} style={styles.productContainer}>
          <Image source={{ uri: product.imageUrl }} style={styles.image} />
          <Text>{product.name}</Text>
          <Button title='Add to cart' onPress={() => dispatch(addItem(product))} />
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  productContainer: {
    marginRight: 10,
  },
  image: {
    width: 100,
    height: 100,
  },
});

export default ProductList;