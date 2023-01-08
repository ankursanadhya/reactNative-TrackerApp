import React, { useEffect, useState } from "react";
import {
  requestForegroundPermissionsAsync,
  requestBackgroundPermissionsAsync,
  watchPositionAsync,
  Accuracy,
} from "expo-location";
export default (shouldTrack, callback) => {
  const [err, setErr] = useState(null);

  //her we add shoudtrack as dependency so tht when this value get chng we ca n update our data is useeffect as well
  useEffect(() => {
    let subscriber;
    const startWatching = async () => {
      try {
        const { granted } = await requestForegroundPermissionsAsync();
        if (!granted) {
          throw new Error("Location permission not granted");
        }
        // await requestForegroundPermissionsAsync();
        // await  requestBackgroundPermissionsAsync();
        subscriber = await watchPositionAsync(
          {
            accuracy: Accuracy.BestForNavigation,
            timeInterval: 1000,
            distanceInterval: 10,
          },
          //now anytime we get location update we will do a callback
          callback
          // (location) => {
          //   addLocation(location);
          // }
        );
        // const { granted } = await requestForegroundPermissionsAsync();
        // if (!granted) {
        //   throw new Error('Location permission not granted');
        // }
      } catch (e) {
        setErr(e);
      }
    };

    if (shouldTrack) {
      startWatching();
    } else {
      if (subscriber) {
        subscriber.remove();
      }
      subscriber = null;
    }
    // this is our cleanup function where we are cleaning our previous cb so tht we dont get out of memory
    return () => {
      if (subscriber) {
        subscriber.remove();
      }
    };
  }, [shouldTrack, callback]);
  // if value of call back changes then we will run startwatching again
  // we are using [] because we may be want to return multiple error in single array  this is just convention to hook this will give error when we get error while getting permission
  return [err];
};
