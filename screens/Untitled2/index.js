import { Text } from "react-native";
import { ImageBackground } from "react-native";
import React from "react";
import { View, StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled2 = () => {
  return <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={{
      backgroundColor: '#f0f0f1',
      padding: 10,
      position: 'relative',
      flex: 1
    }}><ImageBackground style={styles.gxWwKAEU} source={require("./contact us .png")} resizeMode="cover"><Text style={styles.WvVWspeQ}>{"Contact Us"}</Text><View style={styles.PjfIMfLo}></View></ImageBackground></ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%'
  },
  gxWwKAEU: {
    width: 341,
    height: 611
  },
  WvVWspeQ: {
    width: 172,
    height: 50,
    lineHeight: 14,
    fontSize: 28,
    borderRadius: 0,
    color: "#ffffff",
    fontWeight: "700",
    position: "absolute",
    top: 119,
    left: 84
  },
  PjfIMfLo: {
    height: 42,
    width: 253,
    backgroundColor: "#E4E4E4",
    borderRadius: 0,
    color: "#777777"
  }
});
export default Untitled2;