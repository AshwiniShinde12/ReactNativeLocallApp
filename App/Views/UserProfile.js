import React, { Component } from 'react';
import { StyleSheet, Image, Button, Alert, TouchableOpacity, Text, View, StatusBar, Platform, TextInput, navigate } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import ImageWorld from './assets/Images/world.png';


class TakeUserName extends Component {

load = () =>{
   this.props.navigation.navigate('SetPin')
}
render() {
    return (
      <View style={styles.container}>
        <StatusBar
          barStyle="light-content"
          backgroundColor="#40A3F2"
        />
         <Image style={styles.imgView} source={ImageWorld}>
         </Image>
         <TextInput style={styles.textFields} placeholder="Enter current location" />
         <Text style={styles.text} />
         <View style={styles.btnLogin}>
         <Button style={styles.btnLogin} onPress={this.load} title="Proceed" color="white" />
         </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#40A3F2',

  },

  welcome: {
    fontSize: 50,
    textAlign: 'center',
    margin: 10,
    color: '#40A3F2',
    fontWeight: 'bold',
    fontFamily: "Cochin",
    marginBottom:'10%',

  },
  instructions: {
    textAlign: 'center',
    color: '#F5FCFF',
    marginBottom: 5,
  },
  textFields: {
    height: 50,
    fontSize: 20,
    width:'80%',
    color:'white',
    justifyContent: 'center',

  },
  text: {
    height:2,
    backgroundColor:'black',
    width:'80%',
  },
  btnLogin: {
   height:45,
   borderRadius:15,
   backgroundColor:'#0B4D88',
   borderWidth: 1,
   borderColor:'gray',
   width:'80%',
   shadowColor: '#000000',
   shadowOffset: {
     width: 0,
     height: 3
   },
   shadowRadius: 10,
   shadowOpacity: 0.25,
   marginTop:'5%',
 },

 imgView: {
   height:100,
   width: 100,
 },

});

export default TakeUserName;
