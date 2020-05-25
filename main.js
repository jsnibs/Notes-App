/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Tasks from './app/Tasks';
import Notes1 from './app/Notes';
import Settings from './app/Setting';

const Tab = createMaterialBottomTabNavigator();

export default function BottomTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Tasks"
      shifting={true}
      sceneAnimationEnabled={true}
      backBehavior="initialRoute"
      activeColor="#6c63ff"
      inactiveColor="#b8b4fa"
      barStyle={{backgroundColor: '#ffffff', paddingBottom: 10}}>
      <Tab.Screen
        name="Tasks"
        component={Tasks}
        options={{
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons
              name="checkbox-multiple-marked-circle-outline"
              color={color}
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Notes"
        component={Notes1}
        options={{
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="book-lock" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Reminder"
        component={Settings}
        options={{
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="settings" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
