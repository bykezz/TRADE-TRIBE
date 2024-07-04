import React from "react";
import { View, StyleSheet, Image, TouchableHighlight } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AppText from "./AppText";
import colors from "../config/colors";
import Swipeable from "react-native-gesture-handler/Swipeable";

function ListItems({
  title,
  subTitle,
  image,
  IconComponent,
  onPress,
  renderRightActions,
}) {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
        <View style={styles.container}>
          {IconComponent}
          {image && <Image style={styles.image} source={image} />}
          <View style={styles.detailsContainer}>
            <AppText NumberOfLines={1} style={styles.title}>
              {title}
            </AppText>
            {subTitle && (
              <AppText NumberOfLines={2} style={styles.subTitle}>
                {subTitle}
              </AppText>
            )}
          </View>
          <MaterialCommunityIcons
            name="chevron-right"
            size={25}
            color={colors.medium}
          />
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
}
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flexDirection: "row",
    padding: 10,
    backgroundColor: colors.white,
  },
  detailsContainer: {
    marginLeft: 10,
    justifyContent: "center",
    flex: 1,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  subTitle: {
    color: colors.medium,
  },
  title: {
    fontWeight: "900",
  },
});
export default ListItems;
