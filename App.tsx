import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import BottomNavigatior from "./src/navigations/BottomNavigator";

export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <BottomNavigatior />
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
