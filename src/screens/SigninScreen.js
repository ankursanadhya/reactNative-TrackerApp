import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import AuthForm from "../component/AuthForm";
import NavLink from "../component/NavLink";
import { Context } from "../context/AuthContext";
const SigninScreen = () => {
  const { state, signin } = useContext(Context);
  return (
    <View style={styles.container}>
      <AuthForm
        headerText="SignIn For Tracker"
        errorMessage={state.errorMessage}
        onSubmit={signin}
        //anytime on submit called inside authform then just calle signup with arguments
        submitButtonText="signIn"
      />
      <NavLink
        txt={"Don't have account Please Signup"}
        routeName={"SignupScreen"}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    // borderWidth:3,
    // borderColor:"red",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 200,
  },
});
export default SigninScreen;
