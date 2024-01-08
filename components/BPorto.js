import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";

export default function BPorto() {
  const Tekan = () => alert("Rawrr.....");
  const [likeCount, setLikeCount] = React.useState(0);
  const [dislikeCount, setDislikeCount] = React.useState(0);

  const handleLike = () => {
    setLikeCount(likeCount + 1);
  };

  const handleDislike = () => {
    setDislikeCount(dislikeCount + 1);
  };

  return (
    <View style={styles.container}>
      <Pressable onPress={Tekan}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>➜</Text>
        </View>
      </Pressable>
      <View style={styles.countContainer}>
        <Pressable onPress={handleLike}>
          <Text style={styles.emoji}>👍</Text>
        </Pressable>
        <Text>{likeCount}</Text>
        <Pressable onPress={handleDislike}>
          <Text style={styles.emoji}>👎</Text>
        </Pressable>
        <Text>{dislikeCount}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  button: {
    backgroundColor: "red",
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
  countContainer: {
    flexDirection: "row",
    marginTop: 5,
  },
  emoji: {
    marginRight: 5,
  },
});
