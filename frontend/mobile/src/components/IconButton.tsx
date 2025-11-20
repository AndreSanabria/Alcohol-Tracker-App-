import React from "react";
import { Pressable, StyleSheet, ViewStyle } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { colors, gradients, radius, shadows, spacing } from "../theme";

type IconButtonProps = {
  icon: React.ReactNode;
  onPress: () => void;
  style?: ViewStyle;
  gradient?: boolean;
};

export function IconButton({
  icon,
  onPress,
  style,
  gradient = true,
}: IconButtonProps) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.base,
        gradient ? null : styles.flat,
        style,
        pressed && { opacity: 0.9 },
      ]}
    >
      {gradient ? (
        <LinearGradient
          colors={gradients.purplePink}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.gradient}
        >
          {icon}
        </LinearGradient>
      ) : (
        icon
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  base: {
    width: 44,
    height: 44,
    borderRadius: radius.pill,
    alignItems: "center",
    justifyContent: "center",
    ...shadows.soft,
  },
  gradient: {
    width: "100%",
    height: "100%",
    borderRadius: radius.pill,
    alignItems: "center",
    justifyContent: "center",
    padding: spacing.sm,
  },
  flat: {
    backgroundColor: colors.card,
  },
});
