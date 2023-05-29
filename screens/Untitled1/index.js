import { Pressable } from "react-native";
import { Text } from "react-native";
import { ImageBackground } from "react-native";
import React from "react";
import { View, StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled1 = () => {
  return <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={{
      backgroundColor: "#f0f0f1",
      padding: 10,
      position: "relative",
      flex: 1
    }}>
        <ImageBackground style={styles.tSijTtLy} source={require("./logo of qa.png")} resizeMode="cover">
          <ImageBackground style={styles.clKiUQON} source={require("./QA_PIC.jpg")} resizeMode="cover"></ImageBackground>
          
            <Pressable><View style={styles.XXImutqw}>
              <Pressable>
                <Text style={styles.hNuYJHok}>{"Contact Us"}</Text>
              </Pressable>
            </View></Pressable>
          
          <Pressable>
            <View style={styles.YrbzOzAo}>
              <Pressable><Text style={styles.bTLIKFIR}>{"About Us"}</Text></Pressable>
            </View>
          </Pressable>
          <Pressable>
            <View style={styles.lFgTUvNB}>
              <Text style={styles.lDFIxoMH}>{"Terms and Conditions"}</Text>
            </View>
          </Pressable>
          <Pressable>
            <View style={styles.OrDyGryD}>
              <Text style={styles.UsAwfPBD}>{"Privacy Policy"}</Text>
            </View>
          </Pressable>
        </ImageBackground>
      </ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: "100%"
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
    backgroundColor: "#3dc3c3",
    borderRadius: 17,
    color: "#777777",
    position: "absolute",
    top: 450,
    left: 135
  },
  YrbzOzAo: {
    height: 30,
    width: 80,
    backgroundColor: "#3DC3C3",
    borderRadius: 17,
    color: "#777777",
    position: "absolute",
    top: 485,
    left: 135
  },
  lFgTUvNB: {
    height: 31,
    width: 153,
    backgroundColor: "#338bdc",
    borderRadius: 17,
    color: "#777777",
    position: "absolute",
    top: 536,
    left: 98
  },
  OrDyGryD: {
    height: 30,
    width: 153,
    backgroundColor: "#338BDC",
    borderRadius: 17,
    color: "#777777",
    position: "absolute",
    top: 577,
    left: 98
  },
  hNuYJHok: {
    width: 72,
    height: 15,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0,
    position: "absolute",
    top: 5,
    left: 6,
    fontWeight: "700",
    color: "#ffffff"
  },
  bTLIKFIR: {
    width: 100,
    height: 50,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0,
    position: "absolute",
    top: 8,
    color: "#fffcfc",
    fontWeight: "700",
    left: 10
  },
  lDFIxoMH: {
    width: 148,
    height: 31,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0,
    position: "absolute",
    top: 7,
    left: 10,
    color: "#ffffff",
    fontWeight: "700"
  },
  UsAwfPBD: {
    width: 100,
    height: 50,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0,
    position: "absolute",
    top: 8,
    fontWeight: "700",
    color: "#fffdfd",
    left: 32
  }
});
export default Untitled1;