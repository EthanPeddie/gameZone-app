import { ActivityIndicator, Dimensions, FlatList, View } from "react-native";
import React, { useEffect, useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";

import apiClient from "../api/apiClient";
import color from "../config/color";
import Card from "../components/Card";
import { Game } from "../types/GamesType";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";

interface FetchGameResponse {
  count: number;
  results: Game[];
}

const HomeScreen = () => {
  const { height } = Dimensions.get("window");
  const Height = height - useBottomTabBarHeight();
  const [games, setGames] = useState<Game[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchGames = async () => {
    setLoading(true);
    try {
      const response = await apiClient.get<FetchGameResponse>("/games");
      console.log(response.data.results);
      setGames(response.data.results);
    } catch (error) {
      console.log("Data Fetching Error", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchGames();
  }, []);

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
        {loading ? (
          <View>
            <ActivityIndicator size={40} color={color.bgWhite} />
          </View>
        ) : (
          <FlatList
            data={games}
            keyExtractor={(game) => game.id.toLocaleString()}
            numColumns={2}
            renderItem={({ item, index }) => <Card game={item} key={index} />}
          />
        )}
      </SafeAreaView>
    </LinearGradient>
  );
};

export default HomeScreen;
