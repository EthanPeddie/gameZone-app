import { View, Text } from "react-native";
import React from "react";

interface Props {
  score: number;
}

const MetaCriticScore = ({ score }: Props) => {
  return (
    <View
      style={{
        width: 24,
        height: 24,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5,
        backgroundColor:
          score > 80 ? "#16f74e" : score > 60 ? "#f3db00" : "red",
      }}
    >
      <Text
        style={{
          color: score > 80 ? "white" : score > 60 ? "black" : "white",
          fontWeight: "700",
        }}
      >
        {score}
      </Text>
    </View>
  );
};

export default MetaCriticScore;
