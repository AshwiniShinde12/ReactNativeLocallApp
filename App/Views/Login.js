import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  StatusBar,
  TextInput,
  Button,
  Alert,
  navigate
} from 'react-native';

class Login extends Component {

  // componentDidMount(){
  //       this.load()
  //       this.props.navigation.addListener('willFocus', this.load)
  //   }
  constructor(props) {
      super(props);

      this.state = {
        username: '',
        password: '',
        role: '',
        data: ''
      };
    }

    load = () => {
        // if(this.state.username == '')
        // {
        //   Alert.alert("Alert","Please enter valid name")
        //   return
        // }else{
        //   console.log('I am triggered')
        //   if(this.state.password == ''){
        //
        //     Alert.alert("Alert","Please enter valid password")
        //     return
        //
        //   }else{
        //       this.props.navigation.navigate('TakeUserName')
        //   }
           this.props.navigation.navigate('TakeUserName')
      //  }

    }


    // <TextInput
    //           value={this.state.username}
    //           onChangeText={(username) => this.setState({ username })}
    //           placeholder={'Username'}
    //           style={styles.input}
    //
    //         />
  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden={true} />
        <Text style={styles.welcome}>
          LOCALL
        </Text>
        <TextInput style={styles.textFields} value={this.state.username}
          onChangeText={(username) => this.setState({ username })} placeholder="Please enter username" placeholderTextColor="white">
        </TextInput>
        <Text style={styles.text} />
        <TextInput style={styles.textFields} value={this.state.password} onChangeText={(password) => this.setState({password})} placeholder="Please enter password" placeholderTextColor="white">
        </TextInput>
        <Text style={styles.text} />
        <View style={styles.btnLogin}>
        <Button style={styles.btnLogin} onPress={this.load} title="Login" alignItems='center' color="white">
        </Button>
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
    backgroundColor: '#40A3F2',
  },
  welcome: {
    fontSize: 50,
    textAlign: 'center',
    margin: 10,
    color: '#F5FCFF',
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

  },
  text: {
    height:2,
    backgroundColor:'white',
    width:'80%',
    marginBottom:'2%',
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

});

export default Login;
