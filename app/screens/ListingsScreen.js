import React from "react";
import Screen from "../components/Screen";
import { FlatList, StyleSheet, View } from "react-native";
import Card from "../components/Card";
import colors from "../config/colors";

const Listings = [
  {
    id: 1,
    title: "Red jacket for sale",
    price: 100,
    image: require("../assets/red jacket.png"),
  },
  {
    id: 2,
    title: "Couch in great condition",
    price: 1000,
    image: require("../assets/chair.png"),
  },
];
function ListingsScreen(props) {
  return (
    <View style={styles.screen}>
      <FlatList
        data={Listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={"$" + item.price}
            image={item.image}
          />
        )}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.light,
    flex: 1,
  },
});
export default ListingsScreen;
