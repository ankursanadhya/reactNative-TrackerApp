// we are creating this page just to create a function so tht we can save our track location and their name
import { useContext } from "react";
import { Context as TrackContext } from "../context/TrackContext";
import { Context as LocationContext } from "../context/LocationContext";
import * as RootNavigation from "../navigationRef";

export default () => {
  const { createTrack } = useContext(TrackContext);
  const {
    state: { locations, name },
    reset,
  } = useContext(LocationContext);

  const saveTrack = async () => {
    await createTrack(name, locations);
    reset();
    RootNavigation.navigate('TrackListScreen')
  };

  return [saveTrack];
  //return an arrray tht has some value inside it this is just for commmunity convection we can write "return saveTrack" as well.
};
