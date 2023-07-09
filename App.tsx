import React from 'react';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import Library from './src/components/Library';
import DetailsScreen from './src/components/DetailsScreen';
import SettingsScreen from './src/screens/SettingsScreen';
import AccordianScreen from './src/components/AccordianScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ResponsePrayer from './src/components/ResponsePrayer';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const HomeNav = ()=> {
  return (
    <Stack.Navigator>
    <Stack.Screen
      options={{
        headerShown: false,
      }}
      name="HomeScreen"
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
    <Stack.Screen
    options={{
      headerShown: false,
    }}
    name="Response"
    component={ResponsePrayer}
  />
  </Stack.Navigator>
  )
}

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused
              ? 'home'
              : 'home-outline';
          } else if (route.name === 'More Info') {
            iconName = focused ? 'information-circle' : 'information-circle-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'black',
        tabBarInactiveTintColor: 'gray',
      })}>
      <Tab.Screen options={{ headerShown: false }} name="Home" component={HomeNav} />
      <Tab.Screen options={{ headerShown: false }} name="More Info" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});

export default App;
