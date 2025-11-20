import { Platform } from "react-native";

export const shadows = {
  soft: Platform.select({
    ios: {
      shadowColor: "#000",
      shadowOpacity: 0.08,
      shadowOffset: { width: 0, height: 4 },
      shadowRadius: 10,
    },
    android: {
      elevation: 3,
    },
    default: {},
  }),
  card: Platform.select({
    ios: {
      shadowColor: "#000",
      shadowOpacity: 0.06,
      shadowOffset: { width: 0, height: 10 },
      shadowRadius: 20,
    },
    android: {
      elevation: 4,
    },
    default: {},
  }),
  heavy: Platform.select({
    ios: {
      shadowColor: "#000",
      shadowOpacity: 0.14,
      shadowOffset: { width: 0, height: 14 },
      shadowRadius: 24,
    },
    android: {
      elevation: 8,
    },
    default: {},
  }),
};
