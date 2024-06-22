import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "../screens/HomeScreen";
import route from "./route";

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={route.MAIN} component={HomeScreen} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
