import createDataContext from "./createDataContext";
import trackerApi from "../api/tracker";
const trackReducer = (state, action) => {
  switch (action.type) {
    case 'fetch_tracks':
      return action.payload;
    default:
      return state;
  }
};

const fetchTracks = dispatch => async () => {
  const response = await trackerApi.get('/tracks');
  // console.log(response)
  dispatch({ type: 'fetch_tracks', payload: response.data });
};
const createTrack = dispatch => async (name, locations) => {
  //,making a req to our api to save locations with respect to their name
  await trackerApi.post("/tracks", { name, locations });
  // console.log(name, locations.length);
};

export const { Provider, Context } = createDataContext(
  trackReducer,
  { fetchTracks, createTrack },
  []
);
