// import React, { useState, useEffect } from 'react';
// import { SafeAreaView, StyleSheet, View, ScrollView, Text, TextInput, TouchableOpacity } from 'react-native';

// export default function App() {
//   const [word, setWord] = useState('')
//   const [num, setNum] = useState(0)
//   const onPress = () => {
//     setWord(num)
//     setNum(num+1)
//   }
//   return (
//     <View style={styles.container}>
//       {/* <View style={{flexDirection: 'row'}}>
//         <TouchableOpacity onPress={onPress}>
//           <Text style={{textAlign: 'center', backgroundColor: 'grey',}}>Home</Text>
//         </TouchableOpacity>
//         <TouchableOpacity onPress={onPress}>
//           <Text style={{textAlign: 'center', backgroundColor: 'blue'}}>Names</Text>
//         </TouchableOpacity>
//         <TouchableOpacity onPress={onPress}>
//           <Text style={{textAlign: 'center', backgroundColor: 'pink'}}>Account</Text>
//         </TouchableOpacity>
//       </View>
//       <View>
//         <Text>{word}</Text>
//       </View> */}
//     </View>
    
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });





import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}