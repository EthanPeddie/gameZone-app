import { View, Text } from "react-native";
import React from "react";
import { Image } from "expo-image";

import color from "../config/color";
import { Game } from "../types/GamesType";
import MetaCriticScore from "./MetaCriticScore";
import PlatFormIconList from "./PlatFormIconList";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <View
      style={{
        margin: 6,
        backgroundColor: color.bgWhite,
        flex: 1,
        borderRadius: 12,
        overflow: "hidden",
      }}
    >
      <View>
        <Image
          source={{
            uri: game.background_image,
          }}
          style={{ height: 100 }}
          contentFit="cover"
        />
      </View>
      <View
        style={{
          padding: 10,
          flexDirection: "row",
        }}
      >
        <Text
          style={{
            color: color.bgBlack,
            fontSize: 20,
            fontWeight: "800",
            flex: 1,
          }}
        >
          {game.name}
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingHorizontal: 10,
          paddingBottom: 10,
        }}
      >
        <PlatFormIconList
          platforms={game.parent_platforms.map((p) => p.platform)}
        />
        <MetaCriticScore score={game.metacritic} />
      </View>
    </View>
  );
};

export default GameCard;
