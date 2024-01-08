import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import BPorto from "./BPorto";

const TIPorto = ({ src, name, desc }) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={src} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.nameText}>
          {name}
          {"\n"}
          <Text style={styles.descText}>{desc}</Text>
        </Text>
        <BPorto />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  imageContainer: {
    alignItems: "center",
  },
  image: {
    width: 250,
    height: 160,
  },
  textContainer: {
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    marginTop: 10,
  },
  nameText: {
    textAlign: "left",
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 10,
  },
  descText: {
    fontWeight: "normal",
    fontSize: 15,
  },
});

export default TIPorto;
