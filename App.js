// Todos:
// add slider to measure productivity
// add a login page
// add a graph to see productivity score and actions per day

// RangeSlider styling: https://reactnativeexample.com/react-native-range-slider-for-android-and-ios/

import axios from "axios";
import { Alert } from 'react-native';
import RangeSlider from 'rn-range-slider';

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  TextInput,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import styles from './style';

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = { question: "What's your top accomplishment of today?",  data: '', TextInputValueHolder: '', date: new Date().toLocaleDateString(), value: null}
    this.onPress = this.onPress.bind(this);
  }

GetValueFunction = () =>{

  const { TextInputValueHolder }  = this.state ;
  
    Alert.alert(TextInputValueHolder)

    axios.post('http://10.0.2.2:8000/api/productivities/', { date: this.state.date, description: TextInputValueHolder})
      .then(response => { 
          console.log("POST RESPONSE: " , JSON.stringify(response));
          // alert(JSON.stringify(response))
      })
      .catch(error => {
          console.log("ERROR RESPONSE: " , JSON.stringify(error));
      });
    }
  
onPress = () => {
  this.setState({
    question: "Congrats on your accomplishments!"
  })
}

render(){
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <View style = { styles.container }>
        <Text style = { styles.text }>Productivity {this.state.data.name}</Text>
      </View>

      <TextInput onChangeText={TextInputValueHolder => this.setState({TextInputValueHolder})} placeholder = {this.state.question} style = {styles.input}/>

      <Text style = { styles.ratingText }>How would you rate your productivity today?</Text>

      <RangeSlider
        style={{width: 385, height: 120, marginLeft: 15}}
        gravity={'center'}
        min={1}
        max={10}
        step={1}
        lineWidth={6}
        thumbRadius={17.5}
        labelPadding={4}

        rangeEnabled={false}
        thumbBorderWidth={2}
        selectionColor="#3df"
        blankColor="#f618"
        onValueChanged={(low, high, fromUser) => {
            this.setState({rangeLow: low, rangeHigh: high, fromUser})
      }}/>

      <View style={styles.inputContainer}>
        <TouchableOpacity onPress={this.GetValueFunction} onPressIn={this.onPress} style={styles.saveButton}>
          <Text style={styles.saveButtonText}>Save</Text>
        </TouchableOpacity>
      </View>

    </>
  );
};
}
