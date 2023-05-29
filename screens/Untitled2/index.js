import { TextInput } from "react-native";
import { Text } from "react-native";
import { ImageBackground } from "react-native";
import React from "react";
import { StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled2 = () => {
  return <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={{
      backgroundColor: '#f0f0f1',
      padding: 10,
      position: 'relative',
      flex: 1
    }}><ImageBackground style={styles.gxWwKAEU} source={require("./contact us .png")} resizeMode="cover"><Text style={styles.WvVWspeQ}>{"Contact Us"}</Text><TextInput style={styles.QEKGVwHG}></TextInput><Text style={styles.LYWXQaos}>{"Text"}</Text><TextInput style={styles.hYTQihax}></TextInput><Text style={styles.rtcNuWmd}>{"Phone number"}</Text><TextInput style={styles.bEMMamWm}></TextInput><Text style={styles.acySsifz}>{"Email"}</Text></ImageBackground></ScrollView>
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
    width: 145,
    height: 18,
    lineHeight: 14,
    fontSize: 28,
    borderRadius: 0,
    color: "#ffffff",
    fontWeight: "700",
    position: "absolute",
    top: 119,
    left: 84
  },
  QEKGVwHG: {
    backgroundColor: "#f3fbfa",
    borderColor: "#cccccc",
    width: 207,
    height: 87,
    position: "absolute",
    top: 199,
    left: 54
  },
  LYWXQaos: {
    width: 47,
    height: 21,
    lineHeight: 14,
    fontSize: 20,
    borderRadius: 0,
    fontWeight: "700",
    color: "#000000",
    position: "absolute",
    top: 176,
    left: 52,
    opacity: 0.57
  },
  hYTQihax: {
    backgroundColor: "#F3FBFA",
    borderColor: "#cccccc",
    width: 198,
    height: 38,
    position: "absolute",
    top: 327,
    left: 56
  },
  rtcNuWmd: {
    width: 146,
    height: 29,
    lineHeight: 14,
    fontSize: 22,
    borderRadius: 0,
    fontWeight: "700",
    opacity: 0.57,
    position: "absolute",
    top: 310,
    left: 57
  },
  bEMMamWm: {
    backgroundColor: "#F3FBFA",
    borderColor: "#cccccc",
    width: 198,
    height: 33,
    left: 59,
    top: 402,
    position: "absolute"
  },
  acySsifz: {
    width: 63,
    height: 17,
    lineHeight: 14,
    fontSize: 22,
    borderRadius: 0,
    fontWeight: "700",
    opacity: 0.84,
    position: "absolute",
    top: 382,
    left: 60
  }
});
export default Untitled2;