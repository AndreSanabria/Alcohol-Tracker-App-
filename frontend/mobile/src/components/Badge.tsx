import React from "react";
import { Text, View, StyleSheet, ViewStyle, TextStyle } from "react-native";
import { colors, radius, spacing, typography } from "../theme";

type BadgeProps = {
  label: string;
  style?: ViewStyle;
  textStyle?: TextStyle;
};

export function Badge({ label, style, textStyle }: BadgeProps) {
  return (
    <View style={[styles.badge, style]}>
      <Text style={[styles.text, textStyle]}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  badge: {
    backgroundColor: "#F2F0FF",
    borderRadius: radius.pill,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.xs,
  },
  text: {
    fontSize: typography.sm,
    color: colors.primary,
    fontWeight: typography.weightMedium as TextStyle["fontWeight"],
  },
});
