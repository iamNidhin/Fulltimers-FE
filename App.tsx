import React from 'react';
import {StyleSheet} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import Library from './src/components/Library';
import DetailsScreen from './src/components/DetailsScreen';
import SettingsScreen from './src/screens/SettingsScreen';
import AccordianScreen from './src/components/AccordianScreen';

const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="Home"
          component={HomeScreen}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="Library"
          component={Library}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="Details"
          component={DetailsScreen}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="Settings"
          component={SettingsScreen}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="Accordian"
          component={AccordianScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});

export default App;
