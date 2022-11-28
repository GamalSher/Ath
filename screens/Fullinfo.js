import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

export default function Fullinfo({ route }) {
  return (
    <View style={styles.spv}>
      <Text style={styles.head}>{route.params.name}</Text>
      <Image
        style={styles.im}
        source={{
          uri: route.params.frontside ? route.params.frontside : null,
        }}
      />
      <Text style={styles.text}>{route.params.description}</Text>
      <Image
        style={styles.im}
        source={{
          uri: route.params.backside ? route.params.backside : null,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    textAlign: "center",
    fontSize: 16,
  },
  head: {
    textAlign: "center",
    fontSize: 30,
    color: "#DAA520",
  },
  im: {
    width: "100%",
    height: 200,
    borderWidth: 10,
    borderColor: "#FFD700",
    borderRadius: 100,
  },
  spv: {
    backgroundColor: "#FFE4B5",
    flex: 1,
  },
});
