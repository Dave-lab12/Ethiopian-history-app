import React from "react";
import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

function Card({ id, title, year, description, image, favorites }) {
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
      <Image style={styles.cardImage} source={image} />
      <View style={styles.cardText}>
        <Text style={styles.bookTitle}>{title}</Text>
        <Text style={styles.subTitle}>{year}</Text>
      </View>
    </Pressable>
  );
}

export default Card;

const styles = StyleSheet.create({
  cards: {
    marginHorizontal: 15,
  },
  cardImage: {
    width: 150,
    height: 150,
    borderRadius: 10,
  },
  bookTitle: {
    fontWeight: "bold",
    margin: 5,
    fontSize: 12,
    textAlign: "center",
    color: "#4D4D4D",
  },
  subTitle: {
    textAlign: "center",
    color: "#4D4D4D",
    fontSize: 12,
    marginBottom: 6,
  },
});
