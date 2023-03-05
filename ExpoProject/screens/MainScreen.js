import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity, Settings } from 'react-native'

import HomeScreen from './HomeScreen'
import UserScreen from './UserScreen'
import SettingScreen from './SettingScreen'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

function Main(props) {

  const { navigation } = props
  // return (
  //   <View style={styles.container}>
  //     <Text style={styles.text}>Home Screen</Text>
  //     <TouchableOpacity
  //       style={styles.buttonContainer}
  //       onPress={() => navigation.navigate('User')}>
  //       <Text style={styles.buttonText}>Go to User Screen</Text>
  //     </TouchableOpacity>
  //   </View>
  // )

  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen}/>
      <Tab.Screen name="User" component={UserScreen} />
      <Tab.Screen name="Setting" component={SettingScreen} />
    </Tab.Navigator>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#ebebeb'
//   },
//   text: {
//     color: '#101010',
//     fontSize: 24,
//     fontWeight: 'bold'
//   },
//   buttonContainer: {
//     backgroundColor: '#222',
//     borderRadius: 5,
//     padding: 10,
//     margin: 20
//   },
//   buttonText: {
//     fontSize: 20,
//     color: '#fff'
//   }
// })

export default Main