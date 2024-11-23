
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

//screens
import HomeScreen from './screens/HomeScreen';
import WeatherScreen from './screens/WeatherScreen';

// Define the screens
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouterName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        {/* <Stack.Screen name="Weather" component={WeatherScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

