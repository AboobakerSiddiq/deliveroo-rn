import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import {TailwindProvider} from 'tailwindcss-react-native';
import RestaurantScreen from './src/screens/RestaurantScreen';
import {Provider} from 'react-redux';
import {store} from './store';
import CartScreen from './src/screens/CartScreen';
import PreparingOrderScreen from './src/screens/PreparingOrderScreen';
import DeliveryScreen from './src/screens/DeliveryScreen';
import ErrorScreen from './src/screens/ErrorScreen';
import SplashScreen from './src/screens/SplashScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  const baseUrl =
    Platform.OS === 'android' ? 'http://10.0.2.2' : 'http://localhost';
  return (
    <TailwindProvider>
      <NavigationContainer>
        <Provider store={store}>
          <Stack.Navigator
            screenOptions={{headerShown: false}}
            initialRouteName="Splash">
            <Stack.Screen name="Splash" component={SplashScreen} />
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Restaurant" component={RestaurantScreen} />
            <Stack.Screen name="Error" component={ErrorScreen} />
            <Stack.Screen
              name="PreparingOrder"
              options={{presentation: 'fullScreenModal'}}
              component={PreparingOrderScreen}
            />
            <Stack.Screen
              name="Cart"
              component={CartScreen}
              options={{presentation: 'modal'}}
            />
            <Stack.Screen
              name="Delivery"
              component={DeliveryScreen}
              options={{presentation: 'fullScreenModal'}}
            />
          </Stack.Navigator>
        </Provider>
      </NavigationContainer>
    </TailwindProvider>
  );
};

export default App;

const styles = StyleSheet.create({});
