import React from "react";
import { View, StyleSheet, ViewStyle } from "react-native";
import { colors, radius, spacing, shadows } from "../theme";

type CardProps = {
  children: React.ReactNode;
  style?: ViewStyle;
  padded?: boolean;
  variant?: "default" | "raised" | "muted";
};

export function Card({
  children,
  style,
  padded = true,
  variant = "default",
}: CardProps) {
  const variantStyle =
    variant === "raised"
      ? styles.raised
      : variant === "muted"
        ? styles.muted
        : styles.default;

  return (
    <View
      style={[
        styles.base,
        variantStyle,
        padded && styles.padded,
        style,
      ]}
    >
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  base: {
    backgroundColor: colors.card,
    borderRadius: radius.lg,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: colors.border,
  },
  default: {},
  muted: {
    backgroundColor: "#FBF9F3",
  },
  raised: {
    ...shadows.card,
  },
  padded: {
    padding: spacing.lg,
  },
});
