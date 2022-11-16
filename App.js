import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ProductPage from './src/screens/ProductPage';
import ShopCartPage from './src/screens/ShopCartPage';
import { CartProvider } from './CartContext';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={ProductPage} options={{headerShown: false}} />
      <Stack.Screen name="ShopCart" component={ShopCartPage}/>
    </Stack.Navigator>
  );
}
/*=============== APP ====================*/
export default function App({ navigation }) {
  return (
    <CartProvider>
      <NavigationContainer>
        <MyStack />
      </NavigationContainer>
    </CartProvider>
  );
}