import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Button, Image, Text, View } from "react-native";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import * as Updates from "expo-updates";
import { useEffect } from "react";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import {
  GestureHandlerRootView,
  TextInput,
} from "react-native-gesture-handler";
import Screen from "./app/components/Screen";
import Icon from "./app/components/Icon";
import ListItems from "./app/components/ListItems";
import AccountScreen from "./app/screens/AccountScreen";
import ListingsScreen from "./app/screens/ListingsScreen";
import AppTextInput from "./app/components/AppTextInput";
import AppPicker from "./app/components/AppPicker";
import LoginScreen from "./app/screens/LoginScreen";
import ListingEditScreen from "./app/screens/ListingEditScreen";
import ListItemSeperator from "./app/components/ListItemSeperator";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";

export default function App() {
  const [imageUri, setImageUri] = useState();
  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync();
      if (!result.canceled) setImageUri(result.assets[0].uri);
      console.log(result.assets[0].uri);
    } catch (error) {
      console.log("Error reading image", error);
    }
  };
  useEffect(() => {}, []);
  // async function onFetchUpdateAsync() {
  //   try {
  //     const update = await Updates.checkForUpdateAsync();

  //     if (update.isAvailable) {
  //       await Updates.fetchUpdateAsync();
  //       await Updates.reloadAsync();
  //     }
  //   } catch (error) {
  //     // You can also add an alert() to see the error message in case of an error when fetching updates.
  //     alert(`Error fetching latest Expo update: ${error}`);
  //   }
  // }
  // useEffect(() => {
  //   onFetchUpdateAsync();
  // }, []);
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Screen>
        <Button title="Select Image" onPress={selectImage} />
        <Image source={{ uri: imageUri }} style={{ width: 200, height: 200 }} />
      </Screen>
    </GestureHandlerRootView>
  );
}
