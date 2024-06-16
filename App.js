import { LogBox, StyleSheet, Text, View } from "react-native";
import Routes from "./src/routes";
import FlashMessage from "react-native-flash-message";
import { GestureHandlerRootView } from "react-native-gesture-handler";

LogBox.ignoreAllLogs(true);

export default function App() {
  return (
    <GestureHandlerRootView style={styles.container}>
      {/* <Provider store={store}> */}
      <Routes />
      <FlashMessage position="top" />
      {/* </Provider> */}
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
