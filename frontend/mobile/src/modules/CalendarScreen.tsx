import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Card, ScreenWrapper } from "../components";
import { colors, gradients, radius, spacing, typography } from "../theme";
import { LinearGradient } from "expo-linear-gradient";

type Day = {
  day: number;
  ounces?: number;
  sober?: boolean;
};

const days: Day[] = [
  { day: 1, ounces: 6 },
  { day: 2 },
  { day: 3 },
  { day: 4 },
  { day: 5 },
  { day: 6 },
  { day: 7 },
  { day: 8, ounces: 12 },
  { day: 9 },
  { day: 10, ounces: 6 },
  { day: 11 },
  { day: 12, sober: true },
  { day: 13, sober: true },
  { day: 14, sober: true },
  { day: 15, ounces: 6 },
  { day: 16, sober: true },
  { day: 17 },
  { day: 18 },
  { day: 19 },
  { day: 20, sober: true },
  { day: 21, sober: true },
  { day: 22 },
  { day: 23 },
  { day: 24, sober: true },
  { day: 25 },
  { day: 26 },
  { day: 27, ounces: 12 },
  { day: 28, sober: true },
  { day: 29 },
  { day: 30 },
  { day: 31, ounces: 12 },
];

const weekdayLabels = ["S", "M", "T", "W", "T", "F", "S"];

export default function CalendarScreen() {
  return (
    <ScreenWrapper>
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <Card padded style={styles.headerCard}>
          <View style={styles.headerRow}>
            <View>
              <Text style={styles.headerTitle}>Calendar</Text>
              <Text style={styles.headerSubtitle}>Tap a day to see details</Text>
            </View>
            <Ionicons name="calendar-outline" size={22} color={colors.primary} />
          </View>
          <Text style={styles.streak}>Streak: 7 days • Week total: 8.4 oz</Text>
        </Card>

        <Card padded style={styles.calendarCard}>
          <View style={styles.weekLabels}>
            {weekdayLabels.map((d, idx) => (
              <Text key={`${d}-${idx}`} style={styles.weekLabel}>
                {d}
              </Text>
            ))}
          </View>
          <View style={styles.grid}>
            {days.map((d) => (
              <Pressable key={d.day} style={styles.dayCell} onPress={() => {}}>
                <View style={styles.dayNumberWrap}>
                  <Text style={styles.dayNumber}>{d.day}</Text>
                </View>
                {d.sober && (
                  <LinearGradient
                    colors={gradients.mintSun}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                    style={styles.soberPill}
                  >
                    <Ionicons name="leaf-outline" size={14} color={colors.success} />
                  </LinearGradient>
                )}
                {d.ounces ? (
                  <Text style={styles.ounces}>{d.ounces} oz</Text>
                ) : (
                  <Text style={styles.ouncesPlaceholder}> </Text>
                )}
              </Pressable>
            ))}
          </View>
          <Text style={styles.footerNote}>Sober streak strong ✨</Text>
        </Card>
      </ScrollView>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  content: {
    padding: spacing.lg,
    paddingBottom: spacing.xxxl,
    gap: spacing.lg,
  },
  headerCard: {
    gap: spacing.sm,
  },
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerTitle: {
    fontSize: typography.lg,
    fontWeight: typography.weightSemiBold as any,
    color: colors.primary,
  },
  headerSubtitle: {
    fontSize: typography.sm,
    color: colors.subtleText,
    marginTop: 2,
  },
  streak: {
    fontSize: typography.sm,
    color: colors.primary,
    fontWeight: typography.weightMedium as any,
  },
  calendarCard: {
    gap: spacing.md,
  },
  weekLabels: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  weekLabel: {
    width: 36,
    textAlign: "center",
    color: colors.mutedText,
    fontSize: typography.sm,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: spacing.sm,
  },
  dayCell: {
    width: 42,
    alignItems: "center",
    paddingVertical: spacing.xs,
    paddingHorizontal: spacing.xs,
    borderRadius: radius.md,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: colors.border,
    backgroundColor: colors.card,
  },
  dayNumberWrap: {
    width: 26,
    height: 26,
    borderRadius: 13,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 2,
  },
  dayNumber: {
    color: colors.primary,
    fontSize: typography.sm,
    fontWeight: typography.weightMedium as any,
  },
  soberPill: {
    marginTop: 2,
    paddingHorizontal: spacing.xs,
    paddingVertical: 2,
    borderRadius: radius.pill,
  },
  ounces: {
    marginTop: 2,
    fontSize: 11,
    color: colors.subtleText,
  },
  ouncesPlaceholder: {
    marginTop: 2,
    fontSize: 11,
    color: "transparent",
  },
  footerNote: {
    textAlign: "center",
    color: colors.subtleText,
    fontSize: typography.sm,
    marginTop: spacing.sm,
  },
});
