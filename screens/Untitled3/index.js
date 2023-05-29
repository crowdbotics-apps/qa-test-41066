import { Pressable } from "react-native";
import { Text } from "react-native";
import { ImageBackground } from "react-native";
import React from "react";
import { View, StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled3 = () => {
  return <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={{
      backgroundColor: '#f0f0f1',
      padding: 10,
      position: 'relative',
      flex: 1
    }}><ImageBackground style={styles.qrTexDcl} source={require("./aaaaa.jpg")} resizeMode="cover"><Text style={styles.dgLmuDek}>{"ABOUT US "}</Text><Text style={styles.JySQFFHV}>{"QA delivers training, apprenticeships and tech skills to UK companies large and small. We believe everything starts with our learners \u2013 transforming their careers, and their lives, is what motivates us."}</Text><Pressable><View style={styles.cFevtuaZ}><Text style={styles.zwqmYNwI}>{"Back"}</Text></View></Pressable></ImageBackground></ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%',
    backgroundColor: "#e3e3e3"
  },
  qrTexDcl: {
    width: 344,
    height: 605
  },
  dgLmuDek: {
    width: 239,
    height: 50,
    lineHeight: 14,
    fontSize: 47,
    borderRadius: 0,
    position: "absolute",
    top: 141,
    color: "#fbf3f3",
    fontWeight: "900",
    left: 49
  },
  JySQFFHV: {
    width: 272,
    height: 74,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0,
    position: "absolute",
    top: 227,
    left: 25,
    color: "#634848"
  },
  cFevtuaZ: {
    height: 49,
    width: 105,
    backgroundColor: "#008dcf",
    borderRadius: 17,
    color: "#777777",
    position: "absolute",
    top: 454,
    left: 107
  },
  zwqmYNwI: {
    width: 44,
    height: 26,
    lineHeight: 14,
    fontSize: 16,
    borderRadius: 0,
    position: "absolute",
    top: 18,
    left: 31,
    color: "#554343"
  }
});
export default Untitled3;