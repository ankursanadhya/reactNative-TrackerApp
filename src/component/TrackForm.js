import React, { useContext } from "react";
import { Input } from "@rneui/themed";
import { Text } from "@rneui/themed";
import { Button } from "@rneui/base";
import Spacer from "./Spacer";
import { Context as LocationContext } from "../context/LocationContext";
import useSaveTrack from "../hooks/useSaveTrack"
const TrackForm = () => {
  const {
    state: { name, recording, locations },
    startRecording,
    stopRecording,
    changeName,
  } = useContext(LocationContext);
  // console.log(locations.length);
  const [saveTrack]=useSaveTrack();
  return (
    <>
      <Spacer />
      <Input
        value={name}
        onChangeText={changeName}
        placeholder="Enter Track Name Here"
      />
      {recording ? (
        <Button title="Stop " onPress={stopRecording} />
      ) : (
        <Button title="Start Recording" onPress={startRecording} />
      )}
      {!recording && locations.length ? (
          <Button title="Save Recording" onPress={saveTrack} />
        ) : null}

      {/* //when we hit this btn we want to add our current location to the locations variable in locationcontext file  */}
    </>
  );
};
export default TrackForm;
