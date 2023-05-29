import { View } from "react-native";
import { CheckBox } from "react-native-elements";
import { TextInput } from "react-native";
import { Text } from "react-native";
import { ImageBackground } from "react-native";
import React from "react";
import { StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled7 = () => {
  return <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={{
      backgroundColor: "#f0f0f1",
      padding: 10,
      position: "relative",
      flex: 1
    }}>
        <ImageBackground style={styles.dwoGoEbI} source={require("./signin.png")} resizeMode="cover">
          
          <TextInput style={styles.iLkWnWzL}></TextInput>
          <TextInput style={styles.dHMkCSmg}></TextInput>
          
        <CheckBox style={styles.mKETrTLD} title="I agree with the Term and Condition and the Privacy Policy. " size={22} checked="true"></CheckBox><Text style={styles.qnmJnRfU}>{"SignUp"}</Text><Text style={styles.eMWHLQxO}>{"Email"}</Text><Text style={styles.BcZPWNfV}>{"Password"}</Text><View style={styles.UTqVWPGs}><Text style={styles.LqwhykXy}>{"SignUp"}</Text></View></ImageBackground>
      </ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: "100%"
  },
  dwoGoEbI: {
    width: 355,
    height: 632,
    position: "absolute",
    top: 0,
    left: 1
  },
  iLkWnWzL: {
    backgroundColor: "#ffffff",
    borderColor: "#cccccc",
    width: 150,
    height: 30,
    position: "absolute",
    top: 249,
    left: 93
  },
  dHMkCSmg: {
    backgroundColor: "#ffffff",
    borderColor: "#cccccc",
    width: 150,
    height: 30,
    position: "absolute",
    top: 328,
    left: 93
  },
  mKETrTLD: {
    width: 183,
    height: 69,
    position: "absolute",
    top: 384,
    left: 81
  },
  qnmJnRfU: {
    width: 184,
    height: 70,
    lineHeight: 14,
    fontSize: 55,
    borderRadius: 0,
    color: "#fbf8f8",
    position: "absolute",
    top: 110,
    left: 85,
    fontWeight: "700"
  },
  eMWHLQxO: {
    width: 43,
    height: 17,
    lineHeight: 14,
    fontSize: 17,
    borderRadius: 0,
    position: "absolute",
    top: 231,
    left: 93,
    fontWeight: "500",
    color: "#fdfbfb"
  },
  BcZPWNfV: {
    width: 83,
    height: 21,
    lineHeight: 14,
    fontSize: 17,
    borderRadius: 0,
    position: "absolute",
    top: 307,
    left: 91,
    color: "#fbf6f6"
  },
  UTqVWPGs: {
    height: 42,
    width: 71,
    backgroundColor: "#542366",
    borderRadius: 17,
    color: "#777777",
    position: "absolute",
    top: 554,
    left: 137
  },
  LqwhykXy: {
    width: 49,
    height: 20,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0,
    position: "absolute",
    top: 12,
    left: 13,
    color: "#f9f7f7"
  }
});
export default Untitled7;