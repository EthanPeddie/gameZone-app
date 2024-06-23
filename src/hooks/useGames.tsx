import { useEffect, useState } from "react";

import apiClient from "../api/apiClient";
import { Game } from "../types/GamesType";

interface FetchGameResponse {
  count: number;
  results: Game[];
}

const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchGames = async () => {
    setLoading(true);
    const controller = new AbortController();
    try {
      const response = await apiClient.get<FetchGameResponse>("/games", {
        signal: controller.signal,
      });
      console.log(response.data.results);
      setGames(response.data.results);
      return () => controller.abort();
    } catch (error: any) {
      setError(error.message);
      console.log("Data Fetching Error", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchGames();
  }, []);
  return { games, loading, error };
};

export default useGames;
