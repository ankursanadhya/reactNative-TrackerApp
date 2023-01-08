import "../_mockLocation";

import React, { useState, useEffect, useContext, useCallback } from "react";
import { View, StyleSheet, Button, Platform } from "react-native";
import { Text } from "@rneui/themed";
// import AsyncStorage from "@react-native-async-storage/async-storage";

import Map from "../component/Map";
import { Context as LocationContext } from "../context/LocationContext";
import useLocation from "../hooks/useLocation";
import { useIsFocused } from "@react-navigation/native";
import TrackForm from "../component/TrackForm";
const TrackCreateScreen = ({ navigation }) => {
  const isFocused = useIsFocused();
  // console.log(isFocused);

  /* <Text>{isFocused ? console.log("focused") : console.log("unfocused")}</Text> */

  // React.useEffect(
  //   () => navigation.addListener("blur", console.log("leaving")),
  //   []
  // );
  const { state, addLocation } = useContext(LocationContext);
  //is focused is to decide whether is user on this screen or not to start or stop location tracking  and second argumnent is to update our location value when user change its own locaotion
  const callback = useCallback(
    (location) => {
      addLocation(location, state.recording);
    },
    [state.recording]
    //if value of state.recording changes then only new value of callback is going to pass
    //if call back value is no changed then our uselocation is not going to change
  );
  const [err] = useLocation(isFocused || state.recording, callback);
  //here we are passing state.recording so tht we can check whether to save our current location data in locations obj in location context we are getting recording state from location context

  // const [err] = useLocation(isFocused, addLocation);

  // const [location, setLocation] = useState(null);
  // const [err, setErr] = useState(null);
  // useEffect(() => {
  //   (async () => {
  //     let { status } = await Location.requestForegroundPermissionsAsync();
  //     if (status !== "granted") {
  //       setErr("Permission to access location was denied");
  //       return;
  //     }

  //     let location = await Location.getCurrentPositionAsync({});
  //     setLocation(location);
  //   })();
  // }, []);
  // let text = "Waiting..";
  // if (err) {
  //   text = err;
  // } else if (location) {
  //   text = JSON.stringify(location);
  // }

  return (
    <View>
      <Text h3>Create A Track</Text>
      <Map />
      {err ? <Text>Please grant us location access</Text> : null}
      <TrackForm />
    </View>
  );
};
const styles = StyleSheet.create({});
export default TrackCreateScreen;
