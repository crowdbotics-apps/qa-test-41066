import { Pressable } from "react-native";
import { Text } from "react-native";
import { ImageBackground } from "react-native";
import React from "react";
import { View, StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled5 = () => {
  return <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={{
      backgroundColor: '#f0f0f1',
      padding: 10,
      position: 'relative',
      flex: 1
    }}><ImageBackground style={styles.eTKkeEzr} source={require("./Privacy-Policy-QA-Harbor(2).jpg")} resizeMode="cover"><Text style={styles.cAkNQkcW}>{"Privacy Policy "}</Text><Text style={styles.lazTYgjn}>{"QA Touch Privacy Policy"}</Text><Text style={styles.BsvFFFDT}>{"This privacy notice explains why QA Touch collects information about you, and how that information may be used.\n\nAs a Data Processor, QA Touch has fair processing responsibilities under the GDPR. This means ensuring that your personally identifiable information (PII) is handled in ways that are safe, transparent, and what you would reasonably expect. According to the GDPR, it is important that data subjects are made aware of, and understand the way their PII is processed and that they have an opportunity to object if they so wish, and that they know how to do so.\n\nOur site\u2019s job alerts subscription form requires you to give us your email address. Users may opt-out of receiving future mailings by choosing the unsubscribe link in the email received by them.\nThis site contains links to other sites. QA Touch is not responsible for the privacy practices or the content of such Web sites."}</Text><Pressable><View style={styles.CzBtAuev}><Text style={styles.RIbFJYpy}>{"Back"}</Text></View></Pressable></ImageBackground></ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%'
  },
  eTKkeEzr: {
    width: 354,
    height: 632,
    position: "absolute",
    top: 6,
    left: -1
  },
  cAkNQkcW: {
    width: 238,
    height: 28,
    lineHeight: 14,
    fontSize: 36,
    borderRadius: 0,
    position: "absolute",
    top: 54,
    fontWeight: "700",
    left: 84,
    opacity: 0.85
  },
  lazTYgjn: {
    width: 249,
    height: 26,
    lineHeight: 14,
    fontSize: 22,
    borderRadius: 0,
    fontWeight: "700",
    position: "absolute",
    top: 160,
    left: 2
  },
  BsvFFFDT: {
    width: 327,
    height: 316,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0,
    position: "absolute",
    top: 184,
    left: 8
  },
  CzBtAuev: {
    height: 60,
    width: 140,
    backgroundColor: "#E4E4E4",
    borderRadius: 17,
    color: "#777777",
    position: "absolute",
    top: 565,
    left: 94
  },
  RIbFJYpy: {
    width: 46,
    height: 24,
    lineHeight: 14,
    fontSize: 19,
    borderRadius: 0,
    position: "absolute",
    top: 19,
    left: 46
  }
});
export default Untitled5;