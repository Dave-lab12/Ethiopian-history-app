import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Image,
  TextInput,
  Pressable,
  ScrollView,
  Dimensions,
} from "react-native";

import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import db from "../Connector";
function Home() {
  useEffect(() => {
    db.collection("Books")
      .get()
      .then((snapshot) => {
        snapshot.docs.forEach((doc) => {
          console.log(doc.data());
        });
      });
  }, []);
  const navigation = useNavigation();
  return (
    <View style={styles.HomeContainer}>
      <ImageBackground
        style={styles.imgBackground}
        source={require("../assets/background.png")}
      />
      <ScrollView>
        <Image style={styles.logo} source={require("../assets/logo.png")} />
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.search}
            onChangeText={() => {}}
            value={Text}
          />
          <Pressable style={styles.searchBtn} onPress={() => {}}>
            <AntDesign name="search1" size={24} color="black" color="white" />
          </Pressable>
        </View>
        <Text style={styles.myBooks}>My Books</Text>

        <View style={styles.userBooks}>
          <Image style={styles.bookImg} source={require("../assets/m.jpg")} />
          <View style={styles.bookTitleContainer}>
            <Text style={styles.bookTitle}>History of Minilik II</Text>
            <View style={styles.progressContainer}>
              <Text style={styles.progressText}>Progress</Text>
              <Text style={styles.progressText}>85%</Text>
            </View>
            <View style={styles.progressBar}></View>
          </View>
        </View>
        <Text style={styles.forYou}>For You </Text>
        <View style={styles.forYouContainer}>
          <View style={styles.cards}>
            <Image
              style={styles.cardImage}
              source={require("../assets/axum.jpg")}
            />
            <View style={styles.cardText}>
              <Text style={styles.bookTitle}>Lalibela civilization</Text>
              <Text style={styles.subTitle}>1990-1999</Text>
            </View>
          </View>
          <View style={styles.cards}>
            <Image
              style={styles.cardImage}
              source={require("../assets/go.jpg")}
            />
            <View style={styles.cardText}>
              <Text style={styles.bookTitle}>Gondar civilization</Text>
              <Text style={styles.subTitle}>1990-1999</Text>
            </View>
          </View>
          <View style={styles.cards}>
            <Image
              style={styles.cardImage}
              source={require("../assets/lal.jpg")}
            />
            <View style={styles.cardText}>
              <Text style={styles.bookTitle}>Gondar civilization</Text>
              <Text style={styles.subTitle}>1990-1999</Text>
            </View>
          </View>
          <View style={styles.cards}>
            <Image
              style={styles.cardImage}
              source={require("../assets/co.jpg")}
            />
            <View style={styles.cardText}>
              <Text style={styles.bookTitle}>Gondar civilization</Text>
              <Text style={styles.subTitle}>1990-1999</Text>
            </View>
          </View>
          <View style={styles.cards}>
            <Image
              style={styles.cardImage}
              source={require("../assets/somal.jpg")}
            />
            <View style={styles.cardText}>
              <Text style={styles.bookTitle}>Gondar civilization</Text>
              <Text style={styles.subTitle}>1990-1999</Text>
            </View>
          </View>
          <Pressable
            style={styles.cards}
            onPress={() =>
              navigation.navigate("Reader", {
                itemId: 86,
                otherParam: "anything you want here",
              })
            }
          >
            <Image
              style={styles.cardImage}
              source={require("../assets/add.jpg")}
            />
            <View style={styles.cardText}>
              <Text style={styles.bookTitle}>Gondar civilization</Text>
              <Text style={styles.subTitle}>1990-1999</Text>
            </View>
          </Pressable>
        </View>
        {/* <TouchableOpacity
          onPress={() =>
            navigation.navigate("Reader", {
              itemId: 86,
              otherParam: "anything you want here",
            })
          }
        >
          <Text>Read a book</Text>
        </TouchableOpacity> */}
      </ScrollView>
    </View>
  );
}

export default Home;

const styles = StyleSheet.create({
  HomeContainer: {
    flex: 1,
  },
  logo: {
    marginTop: "10%",
    alignSelf: "flex-end",
  },
  searchContainer: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  search: {
    width: "70%",
    backgroundColor: "white",
    borderRadius: 20,
    padding: 5,
    shadowColor: "#000",
    marginRight: 15,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0,
    shadowRadius: 4.65,
    elevation: 8,
  },
  imgBackground: {
    width: Dimensions.get("window").width,
    height: "100%",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: -1,
  },
  searchBtn: {
    padding: 5,
    backgroundColor: "#5D66B8",
    width: 35,
    borderRadius: 2,
    color: "white",
  },
  myBooks: {
    marginLeft: 20,
    fontSize: 40,
    fontWeight: "bold",
    color: "#5D66B8",
    marginTop: 10,
  },
  userBooks: {
    padding: 20,
    backgroundColor: "white",
    marginHorizontal: 40,
    marginVertical: 20,
    borderRadius: 10,
    overflow: "hidden",
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0,
    shadowRadius: 4.65,
    elevation: 8,
  },
  bookImg: {
    width: 120,
    height: 120,
  },
  bookTitleContainer: {
    marginLeft: 10,
    width: "50%",
  },
  bookTitle: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#5D66B8",
  },
  progressContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  progressText: {
    fontSize: 10,
    color: "#5D66B8",
  },
  progressBar: {
    width: "100%",
    backgroundColor: "#5D66B8",
    height: 3,
    marginTop: 2,
    borderRadius: 15,
  },
  forYou: {
    marginLeft: 20,
    fontSize: 40,
    fontWeight: "bold",
    color: "#5D66B8",
    marginBottom: 10,
  },
  forYouContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
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
