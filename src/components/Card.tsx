import { View, Text } from "react-native";
import React from "react";
import color from "../config/color";
import { Image } from "expo-image";
import { Game } from "../types/GamesType";

interface Props {
  game: Game;
}

const Card = ({ game }: Props) => {
  return (
    <View
      style={{
        margin: 6,
        backgroundColor: color.bgWhite,
        flex: 1,
        aspectRatio: 1,
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
          justifyContent: "space-between",
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
        <View
          style={{
            width: 20,
            height: 20,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 5,
            backgroundColor:
              game.metacritic > 80
                ? "#16f74e"
                : game.metacritic > 60
                ? "#f3db00"
                : "red",
          }}
        >
          <Text
            style={{
              color:
                game.metacritic > 80
                  ? "white"
                  : game.metacritic > 60
                  ? "black"
                  : "white",
              fontWeight: "700",
            }}
          >
            {game.metacritic}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Card;
