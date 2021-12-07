import React from "react";
import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";

function FavCard({ id, title, year, description, image, favorites }) {
  const navigation = useNavigation();
  return (
    <Pressable
      style={styles.cards}
      onPress={() =>
        navigation.navigate("Reader", {
          otherParam: [title, year, description, image, favorites, id],
        })
      }
    >
      <View style={styles.card}>
        <Image style={styles.cardImage} source={image} />
        <LinearGradient
          style={styles.overlay}
          colors={["transparent", "rgba(93,102,184,1)"]}
        >
          <Text style={styles.overlayText}>{title}</Text>
        </LinearGradient>
      </View>
    </Pressable>
  );
}

export default FavCard;

const styles = StyleSheet.create({
  card: {
    borderRadius: 20,
    margin: 5,
    width: "100%",
  },
  cardImage: {
    height: 220,
    borderRadius: 20,
    width: "100%",
  },
  overlay: {
    width: "100%",

    height: 220,
    position: "absolute",
    justifyContent: "flex-end",
    borderRadius: 20,
  },
  overlayText: {
    // alignSelf: "center",
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
    margin: 15,
  },
});
