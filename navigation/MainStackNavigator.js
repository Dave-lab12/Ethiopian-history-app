import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Reader from "../Screens/Reding";
import Home from "../Screens/Home";

const Stack = createStackNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Reader" component={Reader} />
    </Stack.Navigator>
  );
};

export { MainStackNavigator };
