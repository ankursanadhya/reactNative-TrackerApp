import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Context as TrackContext } from "../context/TrackContext";
import MapView, { Polyline, Circle } from "react-native-maps";

const TrackDetailScreen = (prop) => {
  // console.log(akshay.route.params._id)

  const _id = prop.route.params._id;
  const { state } = useContext(TrackContext);

  const track = state.find((t) => t._id === _id);
  const initialCoords = track.locations[0].coords;
  return (
    <>
      <MapView
        initialRegion={{
          longitudeDelta: 0.1,
          latitudeDelta: 0.1,
          ...initialCoords,
        }}
        style={styles.map}
      >
        <Polyline coordinates={track.locations.map((loc) => loc.coords)} />
      </MapView>
    </>
  );
};
const styles = StyleSheet.create({
  map: { height: 300 },
});
export default TrackDetailScreen;
