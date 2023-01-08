import React, { useState } from "react";
import { Input } from "@rneui/themed";
import { Text } from "@rneui/themed";
import { Button } from "@rneui/base";
import { StyleSheet } from "react-native";
import Spacer from "./Spacer";
const AuthForm = ({ headerText, errorMessage, onSubmit, submitButtonText }) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  return (
    <>
      <Spacer>
        <Text h3>{headerText}</Text>
      </Spacer>
      <Spacer />
      <Input
        placeholder="Email"
        value={email}
        onChangeText={(newEmail) => {
          setEmail(newEmail);
        }}
      />
      <Input
        secureTextEntry
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
      />
      {{ errorMessage } ? (
        <Text style={{ color: "red" }}>{errorMessage}</Text>
      ) : null}

      <Button
        title={submitButtonText}
        onPress={() => onSubmit({ email, password })}
      />
    </>
  );
};
const styles = StyleSheet.create({});
export default AuthForm;
