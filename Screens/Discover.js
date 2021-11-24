import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const Discover = () => {
  return (
    <ScrollView style={styles.discoverContainer}>
      <View style={styles.discoverTitle}>
        <Ionicons
          name="planet-outline"
          size={24}
          color="#5D66B8"
          style={styles.heading2}
        />
        <Text style={styles.heading}>Discover</Text>
      </View>
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

export default Discover;

const styles = StyleSheet.create({
  discoverContainer: {
    flex: 1,
  },
  discoverTitle: {
    marginTop: "20%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
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
    flexDirection: "row",
    flexWrap: "wrap",
    alignContent: "center",
    justifyContent: "center",
  },
  card: {
    borderRadius: 20,
    margin: 5,
  },
  cardImage: {
    width: 170,
    height: 220,
    borderRadius: 20,
  },
  overlay: {
    width: 170,
    height: 220,
    position: "absolute",
    justifyContent: "flex-end",
    borderRadius: 20,
  },
  overlayText: {
    alignSelf: "center",
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    marginBottom: 5,
  },
});
