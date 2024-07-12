import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ListingDetailsScreen from "../screens/ListingDetailsScreen";
import ListingsScreen from "../screens/ListingsScreen";
import { Platform } from "react-native";

const Stack = createNativeStackNavigator();

const FeedNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Listings"
      component={ListingsScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="ListingDetails"
      component={ListingDetailsScreen}
      options={{
        headerShown: false,
        presentation: "modal",
        ...Platform.select({
          android: {
            animation: "slide_from_bottom",
          },
        }),
      }}
    />
  </Stack.Navigator>
);

export default FeedNavigator;
