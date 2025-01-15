import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import BookViewerScreen from '../screens/BookViewerScreen';
import ImportScreen from '../screens/ImportScreen';

const Stack = createStackNavigator();

const AppNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="BookViewer" component={BookViewerScreen} />
      <Stack.Screen name="Import" component={ImportScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default AppNavigator;
