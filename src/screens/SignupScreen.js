import React, { useContext } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Text } from "@rneui/themed";
import Spacer from "../component/Spacer";
import { Context as AuthContext } from "../context/AuthContext";
import AuthForm from "../component/AuthForm";
import NavLink from "../component/NavLink";
const SignupScreen = ({ navigation }) => {
  const { state, signup, clearErrorMessage } = useContext(AuthContext);

  React.useEffect(
    () => navigation.addListener("focus", () => clearErrorMessage()),
    []
  );
  React.useEffect(
    () => navigation.addListener("blur", () => clearErrorMessage()),
    []
  );
  return (
    <View style={styles.container}>
      <AuthForm
        headerText="SignUp For Tracker"
        errorMessage={state.errorMessage}
        onSubmit={({ email, password }) => {
          signup({ email, password });
          navigation = { navigation };
        }}
        //anytime on submit called inside authform then just calle signup with  arguments
        submitButtonText="signUp"
      />
      <NavLink
        txt={" Already have account Sign In Please"}
        routeName={"SigninScreen"}
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
export default SignupScreen;
