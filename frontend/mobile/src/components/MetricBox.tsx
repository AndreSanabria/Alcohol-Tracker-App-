import React from "react";
import { Text, View, StyleSheet, ViewStyle, TextStyle } from "react-native";
import { colors, radius, spacing, typography } from "../theme";

type MetricBoxProps = {
  label: string;
  value: string;
  icon?: React.ReactNode;
  style?: ViewStyle;
  valueStyle?: TextStyle;
};

export function MetricBox({
  label,
  value,
  icon,
  style,
  valueStyle,
}: MetricBoxProps) {
  return (
    <View style={[styles.container, style]}>
      {icon && <View style={styles.icon}>{icon}</View>}
      <View style={styles.textContainer}>
        <Text style={styles.label}>{label}</Text>
        <Text style={[styles.value, valueStyle]}>{value}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.card,
    borderRadius: radius.md,
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.lg,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: colors.border,
  },
  icon: {
    marginRight: spacing.sm,
  },
  textContainer: {
    alignItems: "center",
  },
  label: {
    fontSize: typography.sm,
    color: colors.mutedText,
  },
  value: {
    fontSize: typography.md,
    fontWeight: typography.weightSemiBold as TextStyle["fontWeight"],
    color: colors.primary,
    marginTop: 2,
  },
});
