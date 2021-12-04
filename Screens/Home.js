import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Image,
  TextInput,
  Pressable,
  Dimensions,
  ScrollView,
  FlatList,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import Card from "../component/card";
import { data } from "../data/data.js";
function Home() {
  const navigation = useNavigation();
  return (
    <ScrollView style={styles.HomeContainer}>
      <ImageBackground
        style={styles.imgBackground}
        source={require("../assets/background.png")}
      />
      <StatusBar style="light" />
      <View>
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
        <View>
          <FlatList
            data={data}
            keyExtractor={(item, index) => "key" + index}
            renderItem={({ item }) => {
              return (
                <Card
                  title={item.title}
                  year={item.year}
                  description={item.description}
                  image={item.image}
                />
              );
            }}
            numColumns={2}
          />
        </View>
      </View>
    </ScrollView>
  );
}

export default Home;

const styles = StyleSheet.create({
  HomeContainer: {
    // flex: 1,
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
    // flex: 1,
    // flexDirection: "row",
    // flexWrap: "wrap",
  },
});
