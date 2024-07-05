import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "./Icon";
import AppText from "./AppText";

function CategoryPickerItem({ onPress, item }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <Icon
          backgroundColor={item.backgroundColor}
          name={item.icon}
          size={80}
        />
        <AppText style={styles.label}>{item.label}</AppText>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 15,
    alignItems: "center",
    width: "33%",
  },
  label: {
    marginTop: 5,
    fontSize: 13,
    textAlign: "center",
  },
  touch: {
    flex: 1,
  },
});
export default CategoryPickerItem;
