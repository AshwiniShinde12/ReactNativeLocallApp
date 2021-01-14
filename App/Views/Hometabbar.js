import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import MaterialCommunityIcons from 'react-native-vector-icons/Ionicons';
import JobNow from './JobNow';
import FutureJob from './FutureJob';
import PayNow from './PayNow';
import Profile from './Profile';


const Tab = createBottomTabNavigator();
const SettingsStack = createStackNavigator();
const HomeStack = createStackNavigator();

function MyTabs() {
  return (

    <Tab.Navigator
      shifting={true}
      initialRouteName="Hometabbar"
      tabBarOptions={{
        activeTintColor: '#40A3F2',
      }}
    >
    <Tab.Screen name="JobNow"
    options={{
      tabBarLabel: 'Job Now',
      tabBarIcon: ({ color, size }) => (
        <MaterialCommunityIcons name="today-outline" color={color} size={size} />
      ),
    }}>
         {() => (
           <SettingsStack.Navigator screenOptions={{
             headerLeft: null,
             headerTitleAlign: 'left',
             headerStyle: {
               backgroundColor: '#40A3F2',
             },
             headerTintColor: '#ffffff',
             headerTitleStyle: {
               fontSize: 20,
               fontWeight: '500',
               color: '#ffffff',

             },

           }}>
             <SettingsStack.Screen
               name="Job Now"
               component={JobNow}

             />
           </SettingsStack.Navigator>


         )}
      </Tab.Screen>

      <Tab.Screen name="Future Job"
      options={{
        tabBarLabel: 'Future Job',
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="calendar-outline" color={color} size={size} />
        ),
      }}>
           {() => (
             <SettingsStack.Navigator screenOptions={{
                headerLeft: null,

               headerTitleAlign: 'left',
               headerStyle: {
                 backgroundColor: '#40A3F2',



               },
               headerTintColor: '#ffffff',
               headerTitleStyle: {

                 fontSize: 20,
                 fontWeight: '500',
                 color: '#ffffff',

               },

             }}>
               <SettingsStack.Screen
                 name="Future Job"
                 component={FutureJob}

               />
             </SettingsStack.Navigator>


           )}
        </Tab.Screen>


                  <Tab.Screen name="Pay Now"
                  options={{
                    tabBarLabel: 'Pay Now',
                    tabBarIcon: ({ color, size }) => (
                      <MaterialCommunityIcons name="newspaper-outline" color={color} size={size} />
                    ),
                  }}>
                       {() => (
                         <SettingsStack.Navigator screenOptions={{
                            headerLeft: null,
                           headerTitleAlign: 'left',
                           headerStyle: {
                             backgroundColor: '#40A3F2',
                           },
                           headerTintColor: '#ffffff',
                           headerTitleStyle: {

                             fontSize: 20,
                             fontWeight: '500',
                             color: '#ffffff',

                           },

                         }}>
                           <SettingsStack.Screen
                             name="Pay Now"
                             component={PayNow}

                           />
                         </SettingsStack.Navigator>


                       )}
                    </Tab.Screen>

        <Tab.Screen name="Profile"
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="person-outline" color={color} size={size} />
          ),
        }}>
             {() => (
               <SettingsStack.Navigator screenOptions={{
                 headerLeft: null,
                 headerTitleAlign: 'left',
                 headerStyle: {
                   backgroundColor: '#40A3F2',
                 },
                 headerTintColor: '#ffffff',

                 headerTitleStyle: {

                   fontSize: 20,
                   fontWeight: '500',
                   color: '#ffffff',

                 },

               }}>
                 <SettingsStack.Screen
                   name="Profile"
                   component={Profile}

                 />
               </SettingsStack.Navigator>


             )}
          </Tab.Screen>

    </Tab.Navigator>

  );
}

export default function Hometabbar() {
  return (

      <MyTabs/>

  );
}
