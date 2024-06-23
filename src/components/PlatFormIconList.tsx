import { View } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { FontAwesome6 } from "@expo/vector-icons";

import { PlatForm } from "../types/GamesType";

interface Props {
  platforms: PlatForm[];
}

const PlatFormIconList = ({ platforms }: Props) => {
  const renderIcon = (slug: string) => {
    switch (slug) {
      case "playstation":
        return <Ionicons name="logo-playstation" size={24} color="gray" />;
      case "xbox":
        return <Ionicons name="logo-xbox" size={24} color="gray" />;
      case "mac":
        return <Ionicons name="logo-apple" size={24} color="gray" />;
      case "nintendo":
        return (
          <MaterialCommunityIcons
            name="nintendo-switch"
            size={24}
            color="gray"
          />
        );
      case "web":
        return <MaterialCommunityIcons name="web" size={24} color="gray" />;
      case "pc":
        return <FontAwesome6 name="windows" size={24} color="gray" />;
      case "ios":
        return <FontAwesome6 name="app-store-ios" size={24} color="gray" />;
      case "linux":
        return <FontAwesome6 name="linux" size={24} color="gray" />;
      default:
        return <FontAwesome6 name="question" size={24} color="gray" />;
    }
  };

  return (
    <View style={{ flexDirection: "row", gap: 5 }}>
      {platforms.slice(0, 4).map((p, index) => (
        <View key={index}>{renderIcon(p.slug)}</View>
      ))}
    </View>
  );
};

export default PlatFormIconList;
