import React, { useState, useEffect, useRef } from "react";
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  Image,
  Animated,
} from "react-native";
import LottieView from "lottie-react-native";

import { Ionicons, AntDesign, Feather } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { data } from "../data/data";
function Reader({ route, navigation }) {
  const { otherParam } = route.params;
  const nav = useNavigation();

  const [title, year, description, image, favorites, id] = otherParam;

  const [isFav, setIsFav] = useState(false);
  const progress = useRef(new Animated.Value(0)).current;
  const handleLikeAnimation = () => {
    Animated.timing(progress, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };
  useEffect(() => {
    const d = data.filter((p) => p.id === id);
    if (d[0].favorites === "true") {
      setIsFav(true);
    } else {
      setIsFav(false);
    }
  }, []);
  useEffect(() => {
    if (isFav) {
      animation.current.play(168, 168);
    } else {
      animation.current.play(1, 1);
    }
  }, [isFav]);
  console.log(isFav);
  const animation = React.useRef(null);

  const handleFavorites = async () => {
    if (!isFav) {
      data = data.forEach((per) => {
        if (per.id === id) {
          setIsFav(true);
          per.favorites = "true";
        }
      });
    } else {
      data = data.forEach((per) => {
        if (per.id === id) {
          setIsFav(false);
          per.favorites = "false";
          console.log("hmm");
        }
      });
    }
  };

  return (
    <View>
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
      <LottieView
        ref={animation}
        style={styles.floatingStylesBtn}
        source={require("../assets/like.json")}
        resizeMode="cover"
        autoPlay={true}
        loop={false}
        onPress={() => {
          // handleFavorites();
          // console.log("hmms");
        }}
      />
      {/* <AntDesign
        style={styles.floatingStylesBtn}
        name={`${isFav ? "heart" : "hearto"}`}
        size={24}
        color="black"
        onPress={() => {
          handleFavorites();
        }}
      /> */}
    </View>
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
    backgroundColor: "rgba(255,255,255,0.2)",
    position: "absolute",
    bottom: 10,
    right: 10,
    height: 120,
    width: 120,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
});
