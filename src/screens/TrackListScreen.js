import React, { useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { Context as TrackContext } from "../context/TrackContext";
import { ListItem } from "@rneui/themed";
const TrackListScreen = ({ navigation }) => {
  // console.log(navigation.navigate)
  const { state, fetchTracks } = useContext(TrackContext);
  React.useEffect(navigation.addListener("focus", fetchTracks()));
  // console.log(state);
  return (
    <View>
      <Text>TrackList Screen</Text>
      {/* <Button
        title="goto TrackDetails"
        onPress={() => {
  console.log(navigation.navigate)
          navigation.navigate("TrackDetailScreen");
        }}
      /> */}

      <FlatList
        data={state}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("TrackDetailScreen", { _id: item._id });
              }}
            >
              <ListItem>
                <ListItem.Content>
                  <ListItem.Title>{item.name}</ListItem.Title>
                </ListItem.Content>
                <ListItem.Chevron />
              </ListItem>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({});
export default TrackListScreen;
