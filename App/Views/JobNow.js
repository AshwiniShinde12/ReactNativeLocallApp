import React, { Component } from 'react';
import { SectionList, StyleSheet, Image, Button, Alert, TouchableOpacity, Text, View, StatusBar, Platform, TextInput, navigate } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import ImageUser from './assets/Images/userImg.png';



  const DATA = [
    {
      title: "Run Now",
      data: [
        {
               offerId:"2",
               speciality: "Orthopaedic",
               grade:"Register",
                Address:"Royal perth hospital",
                time:"from 3.00 am ",
                duration:"4hr",
                rate:"$12/hr"
        },

    ],

    },
    {
      title: "Primary",
      data: [
        {
               offerId:"2",
               speciality: "Orthopaedic",
               grade:"Register",
                Address:"Royal perth hospital",
                time:"from 3.00 am ",
                duration:"4hr",
                rate:"$12/hr"
        },
 {
        offerId:"2",
        speciality: "Orthopaedic",
        grade:"Register",
         Address:"Royal perth hospital",
         time:"from 3.00 am ",
         duration:"4hr",
         rate:"$12/hr"
 },
    ],

    },
    {
      title: "Secondary",
      data: [
        {
               offerId:"2",
               speciality: "Orthopaedic",
               grade:"Register",
                Address:"Royal perth hospital",
                time:"from 3.00 am ",
                duration:"4hr",
                rate:"$12/hr"
        },
 {
        offerId:"2",
        speciality: "Orthopaedic",
        grade:"Register",
         Address:"Royal perth hospital",
         time:"from 3.00 am ",
         duration:"4hr",
         rate:"$12/hr"
 },
    ],

    },
  ];
  // [
  //   {
  //     title: "Run Now",
  //     data: ["Pizza", "Burger", "Risotto"]
  //   },
  //   {
  //     title: "Primary",
  //     data: ["French Fries", "Onion Rings", "Fried Shrimps"]
  //   },
  //   {
  //     title: "Secondary",
  //     data: ["Water", "Coke", "Beer"]
  //   },
  // ];

  const Item = ({ title }) => (
    <View style={styles.item}>
      <Text style={styles.title}>Name: {title}</Text>
      <Text style={styles.title}>Job: {title}</Text>
      <View style={styles.lineList}>
      </View>
    </View>

  );
class JobNow extends Component {


load = () =>{
   this.props.navigation.navigate('UserProfile')
}
render() {
    return (
      <View style={styles.container}>
        <StatusBar
          barStyle="light-content"
          backgroundColor="#FFFFFF"
        />
      <SectionList width= '100%'
       sections={DATA}
       keyExtractor={(item, index) => item + index}
       renderItem={({ item }) => <Item title={item} />}
       renderSectionHeader={({ section: { title } }) => (
         <Text style={styles.header}>{title}</Text>
       )}
     />
      </View>
    );
  }
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#FFFFFF',
    marginHorizontal: 16

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
 item: {
  backgroundColor: "#f9c2ff",
  padding: 20,
  marginVertical: 8,

},
header: {
  fontSize: 32,
  backgroundColor: "#fff",
},
title: {
  fontSize: 24,
},

lineList: {
  height: 1,
  backgroundColor:'#40A3F2',
},

});

export default JobNow;
