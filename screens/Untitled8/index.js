import { TextInput } from "react-native";
import { Text } from "react-native";
import { ImageBackground } from "react-native";
import React from "react";
import { View, StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled8 = () => {
  return <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={{
      backgroundColor: '#f0f0f1',
      padding: 10,
      position: 'relative',
      flex: 1
    }}><ImageBackground style={styles.PFvWuWKJ} source={require("./signin.png")} resizeMode="cover"><Text style={styles.oLYHBFWO}>{"Forgot Password "}</Text><TextInput style={styles.uotaamtU}></TextInput><View style={styles.AaOSKVde}><Text style={styles.rWfZuzrw}>{"Forgot"}</Text></View><Text style={styles.LajbVDUp}>{"Email"}</Text></ImageBackground></ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%'
  },
  PFvWuWKJ: {
    width: 358,
    height: 637,
    position: "absolute",
    top: 0,
    left: -3
  },
  oLYHBFWO: {
    width: 235,
    height: 17,
    lineHeight: 14,
    fontSize: 29,
    borderRadius: 0,
    color: "#fbf8f8",
    position: "absolute",
    top: 78,
    left: 71,
    fontWeight: "700"
  },
  uotaamtU: {
    backgroundColor: "#ffffff",
    borderColor: "#cccccc",
    width: 150,
    height: 30,
    position: "absolute",
    top: 212,
    left: 95
  },
  AaOSKVde: {
    height: 60,
    width: 140,
    backgroundColor: "#5f20bd",
    borderRadius: 17,
    color: "#777777",
    position: "absolute",
    top: 318,
    left: 101
  },
  LajbVDUp: {
    width: 40,
    height: 19,
    lineHeight: 14,
    fontSize: 25,
    borderRadius: 0,
    position: "absolute",
    top: 195,
    left: 95,
    color: "#fbfbfb"
  },
  rWfZuzrw: {
    width: 45,
    height: 17,
    lineHeight: 14,
    fontSize: 18,
    borderRadius: 0,
    position: "absolute",
    top: 20,
    left: 45
  }
});
export default Untitled8;