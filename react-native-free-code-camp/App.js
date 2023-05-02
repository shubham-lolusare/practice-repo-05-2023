// import { StatusBar } from "expo-status-bar";
// import { StyleSheet, Text, View } from "react-native";

// export default function App() {
//   console.log("hello world");
//   return (
//     <View style={styles.container}>
//       <Text>
//         Open up App.js to start working on your app! Hey this is my first app
//       </Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });
import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  Platform,
} from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.AndroidSafeArea}>
      <View style={styles.container}>
        <Text style={styles.temp}>6</Text>
        <Text style={styles.feels}>Feels like 5</Text>
        <Text style={styles.highLow}>High: 8 Low 6</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "pink",
    alignItems: "center",
  },

  wrapper: {
    flex: 1,
  },

  AndroidSafeArea: {
    flex: 1,
    backgroundColor: "pink",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },

  temp: {
    color: "black",
    fontSize: 48,
  },

  feels: {
    color: "black",
    fontSize: 30,
  },

  highLow: {
    color: "black",
    fontSize: 20,
  },
});
