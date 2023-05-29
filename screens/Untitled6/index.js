import { TextInput } from "react-native";
import { Text } from "react-native";
import { ImageBackground } from "react-native";
import React from "react";
import { View, StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled6 = () => {
  return <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={{
      backgroundColor: '#f0f0f1',
      padding: 10,
      position: 'relative',
      flex: 1
    }}><ImageBackground style={styles.AmijMkov} source={require("./signin.png")} resizeMode="cover"><Text style={styles.PZJaGMcx}>{"LOGIN"}</Text><TextInput style={styles.XLkPWVTK}></TextInput><TextInput style={styles.eeacndBE}></TextInput><Text style={styles.ziPkeeRM}>{"Email"}</Text><Text style={styles.OgXOdMGU}>{"Password"}</Text><View style={styles.IwuuWrWd}><Text style={styles.CtylXuQP}>{"LOGIN"}</Text></View><Text style={styles.kJZGcCTB}>{"Don't Have an Account?"}</Text><Text style={styles.xwRkMbrz}>{"Sign Up"}</Text></ImageBackground></ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%'
  },
  AmijMkov: {
    width: 354,
    height: 634,
    position: "absolute",
    top: 2,
    left: 2
  },
  PZJaGMcx: {
    width: 151,
    height: 34,
    lineHeight: 14,
    fontSize: 51,
    borderRadius: 0,
    position: "absolute",
    top: 134,
    color: "#fbf9f9",
    left: 96,
    fontWeight: "700"
  },
  XLkPWVTK: {
    backgroundColor: "#ffffff",
    borderColor: "#cccccc",
    width: 150,
    height: 30,
    position: "absolute",
    top: 274,
    left: 92
  },
  eeacndBE: {
    backgroundColor: "#ffffff",
    borderColor: "#cccccc",
    width: 150,
    height: 30,
    position: "absolute",
    top: 343,
    left: 93
  },
  ziPkeeRM: {
    width: 56,
    height: 15,
    lineHeight: 14,
    fontSize: 20,
    borderRadius: 0,
    color: "#faf7f7",
    fontWeight: "700",
    position: "absolute",
    top: 258,
    left: 91
  },
  OgXOdMGU: {
    width: 92,
    height: 16,
    lineHeight: 14,
    fontSize: 20,
    borderRadius: 0,
    fontWeight: "700",
    color: "#f7f0f0",
    position: "absolute",
    top: 326,
    left: 91
  },
  IwuuWrWd: {
    height: 35,
    width: 88,
    backgroundColor: "#000000",
    borderRadius: 17,
    color: "#777777",
    position: "absolute",
    top: 398,
    left: 126
  },
  CtylXuQP: {
    width: 44,
    height: 17,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0,
    position: "absolute",
    top: 11,
    left: 23,
    color: "#fbfbfb"
  },
  kJZGcCTB: {
    width: 222,
    height: 18,
    lineHeight: 14,
    fontSize: 21,
    borderRadius: 0,
    fontWeight: "700",
    color: "#fbf9f9",
    position: "absolute",
    top: 584,
    left: 12
  },
  xwRkMbrz: {
    width: 76,
    height: 18,
    lineHeight: 14,
    fontSize: 21,
    borderRadius: 0,
    position: "absolute",
    top: 584,
    left: 237,
    color: "#f3eb0b",
    fontWeight: "700"
  }
});
export default Untitled6;