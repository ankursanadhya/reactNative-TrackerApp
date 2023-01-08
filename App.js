// In App.js in a new project

import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AsyncStorage from "@react-native-async-storage/async-storage";

import AccountScreen from "./src/screens/AccountScreen";
import SigninScreen from "./src/screens/SigninScreen";
import SignupScreen from "./src/screens/SignupScreen";
import TrackCreateScreen from "./src/screens/TrackCreateScreen";
import TrackDetailScreen from "./src/screens/TrackDetailScreen";
import TrackListScreen from "./src/screens/TrackListScreen";
import ResolveAuthScreen from "./src/screens/ResolveAuthScreen";
import { Provider as AuthProvider } from "./src/context/AuthContext";
import { Provider as LocationProvider } from "./src/context/LocationContext";
import { Provider as TrackProvider } from "./src/context/TrackContext";
import { navigationRef } from "./src/navigationRef";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function Home() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="TrackCreateScreen"
        component={TrackCreateScreen}
        options={{
          title: "Add Track",
          tabBarIcon: () => <FontAwesome name="plus" size={20} color="black" />,
        }}
      />
      <Tab.Screen name="AccountScreen" component={AccountScreen}      options={{
          title: "Account",
          tabBarIcon: () => <MaterialCommunityIcons name="account" size={24} color="black" />,
        }} />
      <Tab.Screen name="TrackListScreen" component={TrackListScreen} options={{
          title: "Tracking List",
          tabBarIcon: () =><FontAwesome name="angellist" size={24} color="black" />,
        }}  />
    </Tab.Navigator>
  );
}
function App() {
  return (
    <TrackProvider>
      <LocationProvider>
        <AuthProvider>
          <NavigationContainer ref={navigationRef}>
            <Stack.Navigator>
              <Stack.Screen
                name="ResolveAuthScreen"
                component={ResolveAuthScreen}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="SignupScreen"
                component={SignupScreen}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Home"
                component={Home}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="TrackDetailScreen"
                component={TrackDetailScreen}
              />
              <Stack.Screen
                name="SigninScreen"
                options={{ headerShown: false }}
                component={SigninScreen}
              />
              <Stack.Screen
                name="TrackListScreen"
                options={{ headerShown: false }}
                component={TrackListScreen}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </AuthProvider>
      </LocationProvider>
    </TrackProvider>
  );
}

export default App;
