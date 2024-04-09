import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import App61 from './Lab6/App61';
import Cart from './Lab6/Cart';
import { Provider } from 'react-redux';
import store from './Lab6/store';
import App71 from './Lab7/Bai711';
import Bai8 from './Lab8/Bai8';

export default function App() {
  return (
    // <View style={styles.container}>
    //   <App61 />
    //   <Text>Đây là giỏ hàng của tôi (PH42693)</Text>
    //   <Provider store={store}>
    //     <Cart />
    //   </Provider>
    // </View>
    <Bai8/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 50
  },
});
