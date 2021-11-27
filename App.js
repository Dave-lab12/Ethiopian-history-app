import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./Screens/Home";
import Reader from "./Screens/Reding";
import Discover from "./Screens/Discover";
import Favorites from "./Screens/Favorites";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 60,
          position: "absolute",
          bottom: 16,
          right: 16,
          left: 16,
          borderRadius: 16,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "ios-home" : "ios-home-outline"}
              size={24}
              color="#5D66B8"
            />
          ),
        }}
      />
      <Tab.Screen
        name="Discover"
        component={Discover}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "planet" : "planet-outline"}
              size={24}
              color="#5D66B8"
            />
          ),
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={Favorites}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ color, focused }) => (
            <MaterialIcons
              name={focused ? "favorite" : "favorite-outline"}
              size={24}
              color="#5D66B8"
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const Drawer = createDrawerNavigator();

const Root = () => {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Tabs" component={MyTabs} />
      <Drawer.Screen name="Discover" component={Discover} />
    </Drawer.Navigator>
  );
};
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Root"
          component={MyTabs}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Reader"
          component={Reader}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Discover" component={Discover} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
