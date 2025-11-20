import React from "react";
import {
  Text,
  StyleSheet,
  Pressable,
  ViewStyle,
  TextStyle,
  View,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { colors, gradients, radius, spacing, typography } from "../theme";

type GradientButtonProps = {
  label: string;
  onPress: () => void;
  icon?: React.ReactNode;
  style?: ViewStyle;
  textStyle?: TextStyle;
  disabled?: boolean;
};

export function GradientButton({
  label,
  onPress,
  icon,
  style,
  textStyle,
  disabled = false,
}: GradientButtonProps) {
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      style={({ pressed }) => [
        style,
        pressed && { opacity: 0.92 },
        disabled && styles.disabled,
      ]}
    >
      <LinearGradient
        colors={gradients.warmSunrise}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.gradient}
      >
        <View style={styles.inner}>
          {icon && <View style={styles.icon}>{icon}</View>}
          <Text style={[styles.label, textStyle]}>{label}</Text>
        </View>
      </LinearGradient>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  gradient: {
    borderRadius: radius.xl,
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.xl,
  },
  inner: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    marginRight: spacing.sm,
  },
  label: {
    color: colors.primary,
    fontSize: typography.md,
    fontWeight: typography.weightSemiBold as TextStyle["fontWeight"],
  },
  disabled: {
    opacity: 0.7,
  },
});
