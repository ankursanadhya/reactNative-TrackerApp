import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button } from "@rneui/base";
import Spacer from "../component/Spacer";
import { Context as AuthContext } from "../context/AuthContext";
const AccountScreen = () => {
  const { signout } = useContext(AuthContext);
  return (
    <View>
      <Text>Account Screen</Text>
      <Spacer>
        <Button title="Sign out" onPress={signout} />
      </Spacer>
    </View>
  );
};
const styles = StyleSheet.create({});
export default AccountScreen;
