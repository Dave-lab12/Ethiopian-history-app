import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Favorites = () => {
  const getData = async () => {
    try {
      console.log(await AsyncStorage.getItem("favorites"));
    } catch (e) {}
  };
  getData();
  return (
    <ScrollView style={styles.favoriteContainer}>
      <View style={styles.favoriteTitle}>
        <MaterialIcons
          name="favorite-outline"
          size={24}
          color="#5D66B8"
          style={styles.heading2}
        />
        <Text style={styles.heading}>Favorites</Text>
      </View>
      {/* {getData()} */}
      <View style={styles.cardsContainer}>
        <View style={styles.card}>
          <Image
            style={styles.cardImage}
            source={require("../assets/harr.jpg")}
          />
          <LinearGradient
            style={styles.overlay}
            colors={["transparent", "rgba(93,102,184,1)"]}
          >
            <Text style={styles.overlayText}>History of Fasil</Text>
          </LinearGradient>
        </View>
        <View style={styles.card}>
          <Image
            style={styles.cardImage}
            source={require("../assets/go.jpg")}
          />
          <LinearGradient
            style={styles.overlay}
            colors={["transparent", "rgba(93,102,184,1)"]}
          >
            <Text style={styles.overlayText}>History of Fasil</Text>
          </LinearGradient>
        </View>
        <View style={styles.card}>
          <Image
            style={styles.cardImage}
            source={require("../assets/adn.jpg")}
          />
          <LinearGradient
            style={styles.overlay}
            colors={["transparent", "rgba(93,102,184,1)"]}
          >
            <Text style={styles.overlayText}>History of Fasil</Text>
          </LinearGradient>
        </View>
        <View style={styles.card}>
          <Image
            style={styles.cardImage}
            source={require("../assets/muslim.jpg")}
          />
          <LinearGradient
            style={styles.overlay}
            colors={["transparent", "rgba(93,102,184,1)"]}
          >
            <Text style={styles.overlayText}>History of Fasil</Text>
          </LinearGradient>
        </View>
        <View style={styles.card}>
          <Image
            style={styles.cardImage}
            source={require("../assets/chr.jpg")}
          />
          <LinearGradient
            style={styles.overlay}
            colors={["transparent", "rgba(93,102,184,1)"]}
          >
            <Text style={styles.overlayText}>History of Fasil</Text>
          </LinearGradient>
        </View>
        <View style={styles.card}>
          <Image
            style={styles.cardImage}
            source={require("../assets/add.jpg")}
          />
          <LinearGradient
            style={styles.overlay}
            colors={[
              "transparent",
              "rgba(196,196,196,0.8)",
              "rgba(93,102,184,1)",
            ]}
          >
            <Text style={styles.overlayText}>History of Fasil</Text>
          </LinearGradient>
        </View>
      </View>
    </ScrollView>
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
  cardsContainer: {
    flexDirection: "column",
    marginTop: 30,
  },
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
