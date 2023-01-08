import React from "react";
import { TouchableOpacity } from "react-native";
import { Text } from "@rneui/themed";
import Spacer from "./Spacer";
import * as RootNavigation from "../navigationRef";

const NavLink = ({ txt, routeName }) => {
  return (
    <>
      <TouchableOpacity onPress={() => RootNavigation.navigate(routeName)}>
        <Spacer />
        <Spacer />
        <Text style={{ color: "blue" }}>{txt}</Text>
        <Spacer />
      </TouchableOpacity>
    </>
  );
};
export default NavLink;
