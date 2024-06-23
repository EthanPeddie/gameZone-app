import {
  ActivityIndicator,
  Dimensions,
  FlatList,
  Text,
  View,
} from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";

import color from "../config/color";
import useGames from "../hooks/useGames";
import GameCard from "../components/GameCard";

const HomeScreen = () => {
  const { height } = Dimensions.get("window");
  const Height = height - useBottomTabBarHeight();

  const { games, loading, error } = useGames();

  return (
    <LinearGradient
      colors={[color.bgBlack, color.bgWhite]}
      style={{
        flex: 1,
        height: Height,
        paddingBottom: 5,
        justifyContent: "center",
      }}
    >
      <SafeAreaView>
        {error && (
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Text style={{ color: color.bgWhite, fontSize: 20 }}>{error}</Text>
          </View>
        )}
        {loading ? (
          <View>
            <ActivityIndicator size={40} color={color.bgWhite} />
          </View>
        ) : (
          <FlatList
            data={games}
            keyExtractor={(game) => game.id.toLocaleString()}
            numColumns={2}
            renderItem={({ item, index }) => (
              <GameCard game={item} key={index} />
            )}
          />
        )}
      </SafeAreaView>
    </LinearGradient>
  );
};

export default HomeScreen;
