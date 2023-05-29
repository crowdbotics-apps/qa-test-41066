import { ImageBackground } from "react-native";
import React from "react";
import { View, StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled1 = () => {
  return <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={{
      backgroundColor: '#f0f0f1',
      padding: 10,
      position: 'relative',
      flex: 1
    }}><ImageBackground style={styles.tSijTtLy} source={require("./logo of qa.png")} resizeMode="cover"><ImageBackground style={styles.clKiUQON} source={require("./QA_PIC.jpg")} resizeMode="cover"></ImageBackground><View style={styles.XXImutqw}></View></ImageBackground></ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%'
  },
  tSijTtLy: {
    width: 346,
    height: 626
  },
  clKiUQON: {
    width: 148,
    height: 97,
    position: "absolute",
    top: 55,
    left: 99
  },
  XXImutqw: {
    height: 30,
    width: 80,
    backgroundColor: "#E4E4E4",
    borderRadius: 17,
    color: "#777777",
    position: "absolute",
    top: 450,
    left: 135
  }
});
export default Untitled1;