import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { data } from "../data/data.js";
import { useIsFocused } from "@react-navigation/native";
import FavCard from "../component/favCard.jsx";
const Favorites = () => {
  const [favorites, setFavorites] = useState(data);
  const IsFocused = useIsFocused();

  useEffect(() => {
    if (IsFocused) {
    }
  }, [IsFocused]);

  const favoriteList = favorites.filter((fav) => {
    if (fav.favorites === "true") {
      return fav;
    }
  });
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
      <View style={styles.cardsContainer}>
        {favoriteList.length > 0 ? (
          data.map((fav) => {
            if (fav.favorites === "true") {
              return (
                <FavCard
                  title={fav.title}
                  year={fav.year}
                  description={fav.description}
                  image={fav.image}
                  favorites={fav.favorites}
                  id={fav.id}
                />
              );
            }
          })
        ) : (
          <View>
            <Image
              style={styles.emptyImg}
              source={require("../assets/empty.png")}
            />
            <Text style={styles.emptyText}>You have no Favorites</Text>
          </View>
        )}
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

  emptyImg: {
    width: 350,
    height: 350,
  },
  emptyText: {
    fontSize: 20,
    textAlign: "center",
    textTransform: "capitalize",
    color: "rgba(20,20,20,0.5)",
  },
});
