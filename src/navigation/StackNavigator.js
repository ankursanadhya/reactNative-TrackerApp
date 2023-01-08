import React, { useState } from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import SigninScreen from "../screens/SigninScreen";
import SignupScreen from "../screens/SignupScreen";
import TrackCreateScreen from "../screens/TrackCreateScreen";
import TrackDetailScreen from "../screens/TrackDetailScreen";
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="SignupScreen" component={SignupScreen} />
      <Stack.Screen name="SigninScreen" component={SigninScreen} />
    </Stack.Navigator>
  );
};

const OtherStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="TrackCreateScreen" component={TrackCreateScreen} />
      <Stack.Screen name="TrackDetailScreen" component={TrackDetailScreen} />
    </Stack.Navigator>
  );
};

export { MainStackNavigator, OtherStackNavigator };
