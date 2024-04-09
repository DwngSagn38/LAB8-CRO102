import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import ProductList from './ProductList';
import Cart from './Cart';

const products = [
  { id: 1, name: 'Product 1', imageUrl: 'https://i.pinimg.com/236x/10/8f/eb/108feb8d2c9ba31b736e547e31236452.jpg' },
  { id: 2, name: 'Product 2', imageUrl: 'https://i.pinimg.com/236x/98/05/9d/98059dee6cccef98a61be71abcd7c4ac.jpg' },
  { id: 3, name: 'Product 3', imageUrl: 'https://i.pinimg.com/236x/a1/92/bc/a192bc3bc496680f1dadaa1653d4ec4d.jpg' },
  { id: 4, name: 'Product 4', imageUrl: 'https://i.pinimg.com/236x/da/24/a8/da24a8d84dfafd02a4293c18475f3145.jpg' }
];

const App61 = () => {
  return (
    <Provider store={store}>
      <View style={{justifyContent: 'space-around'}}>
        <ProductList products={products} />
        
      </View>
    </Provider>
  );
};

export default App61;

const styles = StyleSheet.create({});