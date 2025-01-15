import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
// import BookViewerScreen from '../screens/BookViewerScreen';

const Stack = createStackNavigator();

const AppNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      {/* <Stack.Screen name="BookViewer" component={BookViewerScreen} /> */}
    </Stack.Navigator>
  </NavigationContainer>
);

export default AppNavigator;
