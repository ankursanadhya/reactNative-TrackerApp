import React, { useState } from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TrackDetailScreen from "../screens/TrackDetailScreen";
import TrackListScreen from "../screens/TrackListScreen";
import {MainStackNavigator} from "./StackNavigator"
import {OtherStackNavigator} from "./StackNavigator"
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const BottomTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="MainStackNavigator" component={MainStackNavigator} />
      <Tab.Screen name="OtherStackNavigator" component={OtherStackNavigator} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
