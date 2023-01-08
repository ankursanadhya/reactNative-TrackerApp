import createDataContext from "./createDataContext";
import AsyncStorage from "@react-native-async-storage/async-storage";
import trackerApi from "../api/tracker";
import * as RootNavigation from "../navigationRef";
const authReducer = (state, action) => {
  switch (action.type) {
    //accd to me here state is a grp of variale which contain lot of other variable
    case "add_error":
      // we wll always return brand new obj and never update state obj directly
      return { ...state, errorMessage: action.payload };

    //now state property inside signup will have error property in it

    case "signin":
      //errorMessage:'' so tht user cant see any error mesasge when successfullly login
      return { errorMessage: "", token: action.payload };

    case "clear_error_message":
      return { ...state, errorMessage: "" };

    case "signout":
      return { token: null, errorMessage: "" };
    default:
      return state;
  }
};
const tryLocalSignin = (dispatch) => async () => {
  //tocheck user login or not
  // console.log("first")
  const token = await AsyncStorage.getItem("token");
  // console.log(token)
  if (token) {
    dispatch({ type: "signin", payload: token });
    RootNavigation.navigate("Home");
  } else {
    RootNavigation.navigate("SignupScreen");
  }
};
const clearErrorMessage = (dispatch) => () => {
  dispatch({ type: "clear_error_message" });
};
const signup = (dispatch) => {
  //this will get email and password
  async ({ email, password }) => {
    //make api req with email and password
    //if we signup sucessfully than change our state
    //is we failed than we need to reflect error message
    try {
      const response = await trackerApi.post("/signup", { email, password });
      // console.log(response.data.token);
      await AsyncStorage.setItem("token", response.data.token);
      dispatch({ type: "signin", payload: response.data.token });
      RootNavigation.navigate("Home");
    } catch (error) {
      dispatch({
        type: "add_error",
        payload: "Something Went Wrong with Signup",
      });
      // console.log(error.response.data);
    }
  };
};
const signin = (dispatch) => {
  //this will get email and password
  return async ({ email, password }) => {
    //try to signin
    //handle success by updating our state
    //is we failed than we need to reflect error message

    try {
      const response = await trackerApi.post("/signin", { email, password });
      await AsyncStorage.setItem("token", response.data.token);
      dispatch({ type: "signin  ", payload: response.data.token });
      RootNavigation.navigate("Home");
    } catch (error) {
      dispatch({
        type: "add_error",
        payload: "Something went wrong in signin",
      });
    }
  };
};
const signout = (dispatch) => {
  async () => {
    //signOut
    await AsyncStorage.removeItem("token");
    dispatch({ type: "signout" });
    RootNavigation.navigate("SignupScreen");
  };
};

export const { Provider, Context } = createDataContext(
  authReducer,
  { signin, signup, signout, clearErrorMessage, tryLocalSignin },
  { token: null, errorMessage: "" }
);
