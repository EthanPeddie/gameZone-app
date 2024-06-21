import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";

import apiClient from "../api/apiClient";

const HomeScreen = () => {
  const [games, setGames] = useState([]);

  const fetchGames = async () => {
    try {
      const response = await apiClient.get("/games");
      console.log(response.data);
    } catch (error) {
      console.log("Data Fetching Error", error);
    }
  };

  useEffect(() => {
    fetchGames();
  }, []);
  return (
    <View>
      <Text>HomeScreen</Text>
    </View>
  );
};

export default HomeScreen;
