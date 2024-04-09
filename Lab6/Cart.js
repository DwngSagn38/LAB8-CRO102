import React from 'react';
import { View, Button, Text, Image, ScrollView } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem } from './actions';

const Cart = () => {
  const cartItems = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  return (
    <ScrollView horizontal={true}>
      <View style={{ flexDirection: 'row' }}>
        {cartItems.map(item => (
          <View key={item.id} style={{ marginRight: 10 }}>
            <Text>{item.name} - {item.quantity}</Text>
            <Image source={{ uri: item.imageUrl }} style={styles.image} />
            <Button title="Remove from Cart" onPress={() => dispatch(removeItem(item))} />
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = {
  image: {
    width: 150,
    height: 150,
  },
};

export default Cart;