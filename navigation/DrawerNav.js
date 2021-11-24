import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import { createDrawerNavigator } from "@react-navigation/drawer";

import Home from "../Screens/Home";
import SideNavigation from "../Screens/SideNavigation";

const Drawer = createDrawerNavigator();

const DrawerNav = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="SideNavigation" component={SideNavigation} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export { DrawerNav };
