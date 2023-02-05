import React, { useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet, View, ScrollView, Text, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
  const [currentDate, setCurrentDate] = useState('');
  const [title, setTitle] = useState('');
  const [time, setTime] = useState('');
  const [zeroAm, setZeroAm] = useState('')
  const [oneAm, setOneAm] = useState('')
  const [twoAm, setTwoAm] = useState('')
  const [threeAm, setThreeAm] = useState('')
  const [fourAm, setFourAm] = useState('')
  const [fiveAm, setFiveAm] = useState('')
  const [sixAm, setSixAm] = useState('')
  const [sevenAm, setSevenAm] = useState('')
  const [eightAm, setEightAm] = useState('')
  const [nineAm, setNineAm] = useState('')
  const [tenAm, setTenAm] = useState('')
  const [elevenAm, setElevenAm] = useState('')
  const [twelvePm, setTwelvePm] = useState('')
  const [onePm, setOnePm] = useState('')
  const [twoPm, setTwoPm] = useState('')
  const [threePm, setThreePm] = useState('')
  const [fourPm, setFourPm] = useState('')
  const [fivePm, setFivePm] = useState('')
  const [sixPm, setSixPm] = useState('')
  const [sevenPm, setSevenPm] = useState('')
  const [eightPm, setEightPm] = useState('')
  const [ninePm, setNinePm] = useState('')
  const [tenPm, setTenPm] = useState('')
  const [elevenPm, setElevenPm] = useState('')
  onPress = () => {
    if(time == '0 AM'){
      setZeroAm(title)
    } else if (time == '1 AM') {
      setOneAm(title)
    } else if (time == '2 AM') {
      setTwoAm(title)
    } else if (time == '3 AM') {
      setThreeAm(title)
    } else if (time == '4 AM') {
      setFourAm(title)
    } else if (time == '5 AM') {
      setFiveAm(title)
    } else if (time == '6 AM') {
      setSixAm(title)
    } else if (time == '7 AM') {
      setSevenAm(title)
    } else if (time == '8 AM') {
      setEightAm(title)
    } else if (time == '9 AM') {
      setNineAm(title)
    } else if (time == '10 AM') {
      setTenAm(title)
    } else if (time == '11 AM') {
      setElevenAm(title)
    } else if (time == '12 PM') {
      setTwelvePm(title)
    } else if (time == '1 PM') {
      setOnePm(title)
    } else if (time == '2 PM') {
      setTwoPm(title)
    } else if (time == '3 PM') {
      setThreePm(title)
    } else if (time == '4 PM') {
      setFourPm(title)
    } else if (time == '5 PM') {
      setFivePm(title)
    } else if (time == '6 PM') {
      setSixPm(title)
    } else if (time == '7 PM') {
      setSevenPm(title)
    } else if (time == '8 PM') {
      setEightPm(title)
    } else if (time == '9 PM') {
      setNinePm(title)
    } else if (time == '10 PM') {
      setTenPm(title)
    } else if (time == '11 PM') {
      setElevenPm(title)
    }
  }

  useEffect(() => {
    var date = new Date().getDate(); //Current Date
    var month = new Date().getMonth() + 1; //Current Month
    var year = new Date().getFullYear(); //Current Year
    setCurrentDate(
      month + '/' + date + '/' + year 
    );
    
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View>
        <View 
          style={{
            height: 50
          }}>
            <Text style={{textAlign: 'center', fontSize: 30}}>{currentDate}</Text>
        </View>
        <ScrollView 
          style={{
            height: 640,
            backgroundColor: 'black',
          }}>
          <View>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.timeTextStyle}>0 AM</Text>
              <Text style={styles.eventTextStyle}>{zeroAm}</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.timeTextStyle}>1 AM</Text>
              <Text style={styles.eventTextStyle}>{oneAm}</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.timeTextStyle}>2 AM</Text>
              <Text style={styles.eventTextStyle}>{twoAm}</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.timeTextStyle}>3 AM</Text>
              <Text style={styles.eventTextStyle}>{threeAm}</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.timeTextStyle}>4 AM</Text>
              <Text style={styles.eventTextStyle}>{fourAm}</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.timeTextStyle}>5 AM</Text>
              <Text style={styles.eventTextStyle}>{fiveAm}</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.timeTextStyle}>6 AM</Text>
              <Text style={styles.eventTextStyle}>{sixAm}</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.timeTextStyle}>7 AM</Text>
              <Text style={styles.eventTextStyle}>{sevenAm}</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.timeTextStyle}>8 AM</Text>
              <Text style={styles.eventTextStyle}>{eightAm}</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.timeTextStyle}>9 AM</Text>
              <Text style={styles.eventTextStyle}>{nineAm}</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.timeTextStyle}>10 AM</Text>
              <Text style={styles.eventTextStyle}>{tenAm}</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.timeTextStyle}>11 AM</Text>
              <Text style={styles.eventTextStyle}>{elevenAm}</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.timeTextStyle}>12 PM</Text>
              <Text style={styles.eventTextStyle}>{twelvePm}</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.timeTextStyle}>1 PM</Text>
              <Text style={styles.eventTextStyle}>{onePm}</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.timeTextStyle}>2 PM</Text>
              <Text style={styles.eventTextStyle}>{twoPm}</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.timeTextStyle}>3 PM</Text>
              <Text style={styles.eventTextStyle}>{threePm}</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.timeTextStyle}>4 PM</Text>
              <Text style={styles.eventTextStyle}>{fourPm}</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.timeTextStyle}>5 PM</Text>
              <Text style={styles.eventTextStyle}>{fivePm}</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.timeTextStyle}>6 PM</Text>
              <Text style={styles.eventTextStyle}>{sixPm}</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.timeTextStyle}>7 PM</Text>
              <Text style={styles.eventTextStyle}>{sevenPm}</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.timeTextStyle}>8 PM</Text>
              <Text style={styles.eventTextStyle}>{eightPm}</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.timeTextStyle}>9 PM</Text>
              <Text style={styles.eventTextStyle}>{ninePm}</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.timeTextStyle}>10 PM</Text>
              <Text style={styles.eventTextStyle}>{tenPm}</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.timeTextStyle}>11 PM</Text>
              <Text style={styles.eventTextStyle}>{elevenPm}</Text>  
            </View>
          </View>
        </ScrollView>
        <View>
          <TextInput
            style={styles.textInput}
            placeholder="Title"
            onChangeText = {newTitle => setTitle(newTitle)}
          />
          <TextInput
            style = {styles.textInput}
            placeholder="Start Time"
            onChangeText = {newTime => setTime(newTime)}
          />
          <TouchableOpacity onPress={onPress}>
            <View style = {styles.button}>
              <Text style = {styles.buttonText}>+</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  textInput: {
    marginLeft: 40,
    marginRight: 40,
    height: 40, 
    borderRadius: 10,
    paddingVertical: 14,
    paddingHorizontal: 10,
    textAlign: 'center',
  },
  timeTextStyle: {
    flex: 1,
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 20,
    textAlign: 'left',
    color: 'grey',
  },
  eventTextStyle: {
    flex: 5,
    marginTop: 20,
    marginBottom: 20,
    marginRight: 20,
    textAlign: 'center',
    color: 'white',
  },
  button: {
    marginLeft: 40,
    marginRight: 40,
    borderRadius: 10,
    paddingVertical: 14,
    paddingHorizontal: 10,
    backgroundColor: '#f01d71',
  }, 
  buttonText: {
    textAlign: 'center',
    color: 'white',
  },
});
