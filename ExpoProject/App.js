import React from 'react'

import MainStackNavigator from './navigation/MainStackNavigator.js'
import MainBottomTabNavigator from './navigation/MainBottomTabNavigator.js'

import MainScreen from './screens/MainScreen'
import HomeScreen from './screens/HomeScreen'
import NamesScreen from './screens/NamesScreen'
import SettingScreen from './screens/SettingScreen'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'

import { NativeModules } from 'react-native'

const Stack = createStackNavigator()

export default function App() {
  // return <MainBottomTabNavigator />
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={MainScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Names" component={NamesScreen} />
        <Stack.Screen name="Setting" component={SettingScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}