import { Pressable } from "react-native";
import { Text } from "react-native";
import { ImageBackground } from "react-native";
import React from "react";
import { View, StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled4 = () => {
  return <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={{
      backgroundColor: '#f0f0f1',
      padding: 10,
      position: 'relative',
      flex: 1
    }}><ImageBackground style={styles.GZpxNVly} source={require("./aaterm.png")} resizeMode="cover"><Text style={styles.rTyEaggL}>{"TERMS & CONDITIONS"}</Text><Text style={styles.mLZVXzVg}>{"Whether you are looking at the finer details of your bespoke solution or just want to find out a bit more about us. We\u2019re Keeping it simple. All our T&Cs in one, easy to navigate place."}</Text><Pressable><View style={styles.kYsFOTon}><Text style={styles.CQPvMbgz}>{"Back"}</Text></View></Pressable></ImageBackground></ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%'
  },
  GZpxNVly: {
    width: 382,
    height: 640,
    position: "absolute",
    top: -1,
    left: 1
  },
  rTyEaggL: {
    width: 337,
    height: 40,
    lineHeight: 14,
    fontSize: 31,
    borderRadius: 0,
    color: "#f7f4f4",
    position: "absolute",
    top: 90,
    left: 17,
    fontWeight: "700",
    opacity: 0.8
  },
  mLZVXzVg: {
    width: 189,
    height: 172,
    lineHeight: 14,
    fontSize: 20,
    borderRadius: 0,
    position: "absolute",
    top: 153,
    left: 154,
    fontWeight: "500",
    color: "#ffffff",
    fontFamily: "Nunito"
  },
  kYsFOTon: {
    height: 60,
    width: 140,
    backgroundColor: "#4475bd",
    borderRadius: 17,
    color: "#777777",
    position: "absolute",
    top: 539,
    left: 107
  },
  CQPvMbgz: {
    width: 33,
    height: 19,
    lineHeight: 14,
    fontSize: 25,
    borderRadius: 0,
    position: "absolute",
    top: 22,
    left: 50
  }
});
export default Untitled4;