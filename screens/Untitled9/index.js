import { ImageBackground } from "react-native";
import React from "react";
import { StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled9 = () => {
  return <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={{
      backgroundColor: '#f0f0f1',
      padding: 10,
      position: 'relative',
      flex: 1
    }}><ImageBackground style={styles.ZMCCTcEg} source={require("./pngtree-colorful-watercolor-splash-company-profile-image_730901.jpg")} resizeMode="cover"></ImageBackground></ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%'
  },
  ZMCCTcEg: {
    width: 356,
    height: 637,
    position: "absolute",
    top: 0,
    left: 1
  }
});
export default Untitled9;