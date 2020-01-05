// Todos:
// add slider to measure productivity
// add a login page
// add a graph to see productivity score and actions per day

import axios from "axios";
import { Alert } from 'react-native';

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
    this.state = { value: "What's your top accomplishment of today?",  data: '', TextInputValueHolder: '', date: new Date().toLocaleDateString() }
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
      value: "Congrats on your accomplishments!"
    })
  }

//   componentDidMount = () => {
//     axios.get('http://10.0.2.2:8000/api/productivities/1/')
//     .then(response => {
//       this.setState({
//         data: response.data
//       })
//       console.log(response.data);
//     });
//  }

render(){
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <View style = { styles.container }>
        <Text style = { styles.text }>Productivity {this.state.data.name}
</Text>
      </View>

      <TextInput onChangeText={TextInputValueHolder => this.setState({TextInputValueHolder})} placeholder = {this.state.value} style = {styles.input}/>

      <View style={styles.inputContainer}>
        <TouchableOpacity onPress={this.GetValueFunction} onPressIn={this.onPress} style={styles.saveButton}>
          <Text style={styles.saveButtonText}>Save</Text>
        </TouchableOpacity>
      </View>

    </>
  );
};
}
