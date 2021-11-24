import React from "react";
import { View, Text } from "react-native";
function Reader({ route, navigation }) {
  // const { itemId, otherParam } = route.params;
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Reader page</Text>
      {/* <Text>{otherParam}</Text> */}
    </View>
  );
}

export default Reader;
