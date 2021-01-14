/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  StatusBar
} from 'react-native';
import Login from './App/Views/Login';
import AdditionalSpeciality from './App/Views/AdditionalSpeciality';
import UserProfile from './App/Views/UserProfile';
import TakeUserName from './App/Views/TakeUserName';
import SetPin from './App/Views/SetPin';
import Hometabbar from './App/Views/Hometabbar';
import JobNow from './App/Views/JobNow';
import FutureJob from './App/Views/FutureJob';
import PayNow from './App/Views/PayNow';
import Profile from './App/Views/Profile';

const Stack = createStackNavigator();

const App = ({ navigation }) => {

  return(
    <NavigationContainer>
    <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#40A3F2',
          },

          headerTintColor: '#ffffff',
          headerTitleStyle: {

            fontSize: 20,
            fontWeight: '500',
            color: '#ffffff',

          },

        }}
        initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false}} />
        <Stack.Screen name="AdditionalSpeciality" component={AdditionalSpeciality} options={{ title: 'AdditionalSpeciality' }} />
        <Stack.Screen name="UserProfile" component={UserProfile} options={{ headerShown: false}} />
        <Stack.Screen name="TakeUserName" component={TakeUserName} options={{headerShown: false}} />
        <Stack.Screen name="SetPin" component={SetPin} options={{headerShown: false}} />
        <Stack.Screen name="Hometabbar" component={Hometabbar} options={{headerShown: false}} />
        <Stack.Screen name="JobNow" component={JobNow} options={({ route }) => ({ title: route.params.title })} />
        <Stack.Screen name="FutureJob" component={FutureJob} options={{headerShown: true}} />
        <Stack.Screen name="PayNow" component={PayNow} options={{headerShown: true}} />
        <Stack.Screen name="Profile" component={Profile} options={{headerShown: true}} />
      </Stack.Navigator>
      </NavigationContainer>

    );
};

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,

  },

});

export default App;
