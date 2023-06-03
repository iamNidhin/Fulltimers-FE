import React from 'react';
import {
  StyleSheet,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import Library from './src/screens/Library';
import DetailsScreen from './src/screens/DetailsScreen';
import SettingsScreen from './src/screens/SettingsScreen';

const Stack = createNativeStackNavigator();


function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{
          headerShown: false
        }} name="Home" component={HomeScreen} />
        <Stack.Screen options={{
          headerShown: false
        }}
          name="Library" component={Library} />
        <Stack.Screen
          options={{
            headerShown: false
          }}
          name="Details" component={DetailsScreen} />
      <Stack.Screen
          options={{
            headerShown: false
          }}
          name="Settings" component={SettingsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({

});

export default App;
