import React, { useState, useEffect } from "react";
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  Image,
  Button,
} from "react-native";
import { Ionicons, AntDesign, Feather } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
function Reader({ route, navigation }) {
  const { itemId, otherParam } = route.params;
  const nav = useNavigation();
  // { route, navigation }
  // const { itemId, otherParam } = route.params;
  const [favorites, setFavorites] = useState([]);
  const getData = async () => {
    return await AsyncStorage.getItem(isDark);
  };
  const dark = async () => {
    await AsyncStorage.setItem("Favorites", {});
  };
  // console.log(otherParam);
  const [title, year, description, image] = otherParam;
  console.log(title, year, description, image);
  return (
    <>
      <ScrollView style={styles.readerContainer}>
        <View style={styles.topNavigation}>
          <Ionicons
            name="arrow-back"
            size={24}
            color="black"
            onPress={() => nav.navigate("Home")}
          />
          <View style={styles.darkMode}>
            <Feather
              name="moon"
              size={24}
              color="black"
              onPress={() => dark()}
            />
          </View>
        </View>
        <View style={styles.contentContainer}>
          <View style={styles.imageContainer}>
            <Image style={styles.contentImage} source={image} />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.headlineText}>{title}</Text>
            <Text style={styles.subHeadline}>who is minilk II</Text>
            <Text style={styles.paragraph}>{description.title}</Text>
          </View>
        </View>
      </ScrollView>
      <AntDesign
        style={styles.floatingStylesBtn}
        name="hearto"
        size={24}
        color="black"
        onPress={() => {}}
      />
    </>
  );
}

export default Reader;

const styles = StyleSheet.create({
  topNavigation: {
    marginTop: "15%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
  },
  imageContainer: {
    alignItems: "center",
    marginTop: 30,
  },
  contentImage: {
    borderRadius: 10,
    width: 230,
    height: 250,
  },
  textContainer: {
    marginHorizontal: 20,
  },
  headlineText: {
    fontSize: 50,
    fontWeight: "bold",
    color: "#5D66B8",
    marginVertical: 20,
  },
  subHeadline: {
    color: "#5D66B8",
    fontWeight: "bold",
    fontSize: 18,
    marginVertical: 20,
  },
  paragraph: {
    fontSize: 14,
  },
  floatingStylesBtn: {
    color: "#fff",
    padding: 15,
    borderRadius: 30,
    backgroundColor: "#5D66B8",
    position: "absolute",
    bottom: 10,
    right: 10,
  },
});
