import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Home from '../screens/HomeScreen'
import User from '../screens/UserScreen'

const Stack = createStackNavigator()

function MainStackNavigator() {
  return (
    <View>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen
          name='Home'
          component={Home}
          options={{ title: 'Home Screen' }}
        />
        <Stack.Screen
          name='User'
          component={User}
          options={{ title: 'User Screen' }}
        />
      </Stack.Navigator>
    </View>
  )
}

export default MainStackNavigator