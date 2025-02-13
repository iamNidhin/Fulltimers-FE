import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AccordianScreen from './src/components/AccordianScreen';
import DetailsScreen from './src/components/DetailsScreen';
import Library from './src/components/Library';
import ResponsePrayer from './src/components/ResponsePrayer';
import HomeScreen from './src/screens/HomeScreen';
import SettingsScreen from './src/screens/SettingsScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const HomeNav = () => {
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
  );
};

const TabBarIcon = ({
  route,
  focused,
  color,
  size,
}: {
  route: any;
  focused: boolean;
  color: string;
  size: number;
}) => {
  let iconName: string = '';

  if (route.name === 'Home') {
    iconName = focused ? 'home' : 'home-outline';
  } else if (route.name === 'Messages') {
    iconName = focused ? 'chatbubbles' : 'chatbubbles-outline';
  }

  return <Ionicons name={iconName} size={size} color={color} />;
};

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: props => <TabBarIcon route={route} {...props} />,
          tabBarActiveTintColor: '#05445E',
          tabBarInactiveTintColor: 'gray',
        })}>
        <Tab.Screen
          options={{headerShown: false}}
          name="Home"
          component={HomeNav}
        />
        <Tab.Screen
          options={{headerShown: false}}
          name="Messages"
          component={SettingsScreen}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
export default App;
