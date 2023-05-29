import { TextInput } from "react-native";
import { Text } from "react-native";
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
    }}><ImageBackground style={styles.ZMCCTcEg} source={require("./pngtree-colorful-watercolor-splash-company-profile-image_730901.jpg")} resizeMode="cover"><Text style={styles.sPeBoPXX}>{"Update Profile"}</Text><TextInput style={styles.YieRqpnT}></TextInput><TextInput style={styles.zgZDbMRP}></TextInput><TextInput style={styles.ZDuItrMm}></TextInput><TextInput style={styles.KUhCNUMe}></TextInput><TextInput style={styles.MNrOHJzf}></TextInput><TextInput style={styles.tdLuNdCJ}></TextInput><TextInput style={styles.JGhMSusU}></TextInput><TextInput style={styles.ZXtLNNuI}></TextInput></ImageBackground></ScrollView>
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
  },
  sPeBoPXX: {
    width: 216,
    height: 50,
    lineHeight: 14,
    fontSize: 31,
    borderRadius: 0,
    fontWeight: "700",
    position: "absolute",
    top: 44,
    left: 66,
    color: "#b4a744"
  },
  YieRqpnT: {
    backgroundColor: "#b4a744",
    borderColor: "#cccccc",
    width: 150,
    height: 30,
    position: "absolute",
    top: 120,
    left: 69
  },
  zgZDbMRP: {
    backgroundColor: "#b4a744",
    borderColor: "#cccccc",
    width: 150,
    height: 30,
    position: "absolute",
    top: 181,
    left: 70
  },
  ZDuItrMm: {
    backgroundColor: "#b4a744",
    borderColor: "#cccccc",
    width: 150,
    height: 30,
    position: "absolute",
    top: 239,
    left: 70
  },
  KUhCNUMe: {
    backgroundColor: "#b4a744",
    borderColor: "#cccccc",
    width: 150,
    height: 30,
    position: "absolute",
    top: 289,
    left: 70
  },
  MNrOHJzf: {
    backgroundColor: "#b4a744",
    borderColor: "#cccccc",
    width: 150,
    height: 30,
    position: "absolute",
    top: 339,
    left: 69
  },
  tdLuNdCJ: {
    backgroundColor: "#b4a744",
    borderColor: "#cccccc",
    width: 150,
    height: 30,
    position: "absolute",
    top: 396,
    left: 69
  },
  JGhMSusU: {
    backgroundColor: "#b4a744",
    borderColor: "#cccccc",
    width: 150,
    height: 30,
    position: "absolute",
    top: 446,
    left: 69
  },
  ZXtLNNuI: {
    backgroundColor: "#b4a744",
    borderColor: "#cccccc",
    width: 150,
    height: 30,
    position: "absolute",
    top: 495,
    left: 69
  }
});
export default Untitled9;