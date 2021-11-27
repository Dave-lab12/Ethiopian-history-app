import React from "react";
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  Image,
  Button,
} from "react-native";
import { Ionicons, AntDesign, Feather } from "@expo/vector-icons";
function Reader({ route, navigation }) {
  // const { itemId, otherParam } = route.params;
  return (
    <>
      <ScrollView style={styles.readerContainer}>
        <View style={styles.topNavigation}>
          <Ionicons
            name="arrow-back"
            size={24}
            color="black"
            onPress={() => navigation.navigate("Home")}
          />
          <View style={styles.darkMode}>
            <Feather name="moon" size={24} color="black" />
          </View>
        </View>
        <View style={styles.contentContainer}>
          <View style={styles.imageContainer}>
            <Image
              style={styles.contentImage}
              source={require("../assets/lal.jpg")}
            />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.headlineText}>History Of Minilik II</Text>
            <Text style={styles.subHeadline}>who is minilk II</Text>
            <Text style={styles.paragraph}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut cursus
              leo ullamcorper fusce ornare eu. Malesuada et ut maecenas ut massa
              enim sit justo, gravida.Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Ut cursus leo ullamcorper fusce ornare eu.
              Malesuada et ut maecenas ut massa enim sit justo, gravida. Tempus
              nec sed mauris nam. Sodales at a lobortis pellentesquLorem ipsum
              dolor sit amet, consectetur adipiscing elit. Ut cursus leo
              ullamcorper fusce ornare eu. Malesuada et ut maecenas ut massa
              enim sit justo, gravida. Tempus nec sed mauris nam. Sodales at
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut cursus
              leo ullamcorper fusce ornare eu. Malesuada et ut maecenas ut massa
              enim sit justo, gravida. Tempus nec sed mauris nam. Sodales at a
              lobortis pellentesquLorem ipsum dolor sit amet, consectetur
              adipiscing elit. Ut cursus leo ullamcorper fusce ornare eu.
              Malesuada et ut maecenas ut massa enim sit justo, gravida. Tempus
              nec sed mauris nam. Sodales at Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Ut cursus leo ullamcorper fusce
              ornare eu. Malesuada et ut maecenas ut massa enim sit justo,
              gravida. Tempus nec sed mauris nam. Sodales at a lobortis
              pellentesquLorem ipsum dolor sit amet, consectetur adipiscing
              elit. Ut cursus leo ullamcorper fusce ornare eu. Malesuada et ut
              maecenas ut massa enim sit justo, gravida. Tempus nec sed mauris
              nam. Sodales at Tempus nec sed mauris nam. Sodales at a lobortis
              pellentesquLorem ipsum dolor sit amet, consectetur adipiscing
              elit. Ut cursus leo ullamcorper fusce ornare eu. Malesuada et ut
              maecenas ut massa enim sit justo, gravida. Tempus nec sed mauris
              nam. Sodales at a lobortis pellLorem ipsum dolor sit amet,
              consectetur adipiscing elit. Ut cursus leo ullamcorper fusce
              ornare eu. Malesuada et ut maecenas ut massa enim sit justo,
              gravida. Tempus nec sed mauris nam. Sodales at a lobortis
              pellLorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
              cursus leo ullamcorper fusce ornare eu. Malesuada et ut maecenas
              ut massa enim sit justo, gravida. Tempus nec sed mauris nam.
              Sodales at a lobortis pelle eros commodo mattis fermentum velit.
            </Text>
          </View>
        </View>
      </ScrollView>
      <AntDesign
        style={styles.floatingStylesBtn}
        name="hearto"
        size={24}
        color="black"
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
