import { Platform } from "react-native";
import colors from "./colors";

export default {
  colors: colors,
  text: {
    color: colors.dark,
    fontSize: 20,
    fontWeight: "700",
    fontFamily: Platform.OS === "andriod" ? "Roboto" : "Avenir",
  },
};
