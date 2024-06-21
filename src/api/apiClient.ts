import axios from "axios";
import { RAW_API_KEY } from "@env";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: RAW_API_KEY,
  },
});
