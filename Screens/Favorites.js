import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

const Favorites = () => {
  return (
    <View style={styles.favoriteContainer}>
      <View style={styles.favoriteTitle}>
        <MaterialIcons
          name="favorite-outline"
          size={24}
          color="#5D66B8"
          style={styles.heading2}
        />
        <Text style={styles.heading}>Favorites</Text>
      </View>
    </View>
  );
};

export default Favorites;

const styles = StyleSheet.create({
  favoriteContainer: {
    flex: 1,
  },
  favoriteTitle: {
    marginTop: "20%",
    flexDirection: "row",
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
  },
  heading: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#5D66B8",
    marginLeft: 20,
  },
  heading2: {
    fontSize: 50,
  },
});
