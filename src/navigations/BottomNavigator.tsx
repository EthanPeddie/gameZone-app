import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import route from "./route";

const Tab = createBottomTabNavigator();

const BottomNavigatior = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name={route.HOME}
        component={HomeScreen}
        options={{
          tabBarIcon: () => <Ionicons name="home" size={24} color="black" />,
        }}
      />
      <Tab.Screen
        name={route.PROFILE}
        component={ProfileScreen}
        options={{
          tabBarIcon: () => <Ionicons name="person" size={24} color="black" />,
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigatior;
