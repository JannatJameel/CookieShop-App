import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import store from "./store";
// Components
import Home from "./components/Home";
import ShopList from "./components/ShopList";
import ShopDetail from "./components/ShopDetail";



export default function App() {
  return (
    <Provider store={store}>
      <View>
        <Text></Text>
        {/* <Home/> */}
        {/* <ShopList/> */}
        <ShopDetail/>
        {/* <StatusBar style="auto" /> */}
      </View>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
